/* eslint-disable react/prop-types */
<<<<<<< HEAD
import { useQuiz } from "./QuizContext";

function Options({ question }) {
  const { answer, dispatch } = useQuiz();

=======
function Options({ question, dispatch, answer }) {
>>>>>>> d336dbe8d01eb4899400e0350b117b48e1f15e68
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
