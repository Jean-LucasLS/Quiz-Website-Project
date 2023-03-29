import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import WellDone from '../images/welldone.svg';

import './GameOver.css';

const GameOver = () => {
  return (
    <div id='gameover'>
        <h2>Game Over</h2>
        <p>Score: x</p>
        <p>X from Y questions were correct.</p>
        <img src={WellDone} alt='Quiz ending' />
        <button>Restart</button>
    </div>
  );
};

export default GameOver;