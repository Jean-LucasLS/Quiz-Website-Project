import { createContext, useReducer } from "react";
import questions from '../data/questions'

const STAGES = ['Start', 'Playing', 'End']

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
}

const quizReducer = (state, action) => {

    switch(action.type) {
        case 'CHANGE_STATE':
            return {
                ...state,
                gameStage: STAGES[1],
            };

        case 'REORDER_QUESTIONS': // Shuffle questions
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5; // Return the question index randomly
            });

            return {
                ...state,
                questions: reorderedQuestions,
            };

        case 'CHANGE_QUESTION':
            const nextQuestion = state.currentQuestion + 1; // Quiz progression
            let endGame = false;

            if(!questions[nextQuestion]) { // Verify if the index "nextQuestion" exists
                endGame = true;
            }

            return {
                ...state,
                currentQuestion: nextQuestion, // The current question becomes the next one (+1)
                gameStage: endGame ? STAGES[2] : state.gameStage, // End gaming verify
                answerSelected: false,
            };

        case 'NEW_GAME':
            return initialState;

        case 'CHECK_ANSWER':
            if(state.answerSelected) return state;

            const answer = action.payload.answer;
            const option = action.payload.option;
            let correctAnswer = 0;

            if(answer === option) correctAnswer = 1;

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
            };

        default:
            return state;
    }
};

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState);
    
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};