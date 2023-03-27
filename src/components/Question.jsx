import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  console.log(quizState);

  return (
    <div id='question'>
      <p>Question {quizState.currentQuestion} of {quizState.questions.length}</p>
      <h2>Question</h2>
      <div id='options-container'>
        <p>Options</p>
      </div>
      <button>Continue</button>
    </div>
  )
}

export default Question;