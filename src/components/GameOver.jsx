import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import WellDone from '../images/welldone.svg';

import './GameOver.css';

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id='gameover'>
        <h2>Game Over</h2>
        <p>Score: {quizState.score}</p>
        <p>You made {quizState.score} from {quizState.questions.length}.</p>
        <img src={WellDone} alt='Quiz ending' />
        <button onClick={() => dispatch({type: 'NEW_GAME'})}>Restart</button>
    </div>
  );
};

export default GameOver;