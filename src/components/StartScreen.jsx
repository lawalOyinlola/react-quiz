<<<<<<< HEAD
import { useQuiz } from "./QuizContext";

/* eslint-disable react/prop-types */
function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();

=======
/* eslint-disable react/prop-types */
function StartScreen({ numQuestions, dispatch }) {
>>>>>>> d336dbe8d01eb4899400e0350b117b48e1f15e68
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3> {numQuestions} question to test your React Mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let&apos;s start
      </button>
    </div>
  );
}

export default StartScreen;
