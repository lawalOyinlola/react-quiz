<<<<<<< HEAD
import { useQuiz } from "./QuizContext";
function NextButton() {
  const { index, answer, numQuestions, dispatch } = useQuiz();

=======
/* eslint-disable react/prop-types */
function NextButton({ dispatch, answer, index, numQuestions }) {
>>>>>>> d336dbe8d01eb4899400e0350b117b48e1f15e68
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
