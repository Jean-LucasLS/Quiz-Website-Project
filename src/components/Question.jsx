import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import Option from './Option';

import './Question.css'

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion]

  const onSelectOption = (option) => {
    dispatch({
      type: 'CHECK_ANSWER',
      payload: {answer: currentQuestion.answer, option}
    });
  };

  return (
    <div id='question'>
      <p>Question {quizState.currentQuestion + 1} of {quizState.questions.length}</p>
      <h2>{currentQuestion.question}</h2>
      <div id='options-container'>
        {currentQuestion.options.map((option) => (
          <Option 
          option={option}
          key={option}
          answer={currentQuestion.answer}
          selectOption={() => onSelectOption(option)} />
        ))}
      </div>
      {quizState.answerSelected && (
      <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>Continue</button>
      )} {/*The button "Continue" will be available only when an option has been selected (answerSelected = true)*/}
    </div>
  )
}

export default Question;