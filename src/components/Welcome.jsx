import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import Quiz from '../images/quiz.svg';

import "./Welcome.css";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id='welcome'>
        <h2>Welcome!</h2>
        <p>Click at the button to start:</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Play</button>
        <img src={Quiz} alt='Start'/>
    </div>
  );
};

export default Welcome;