<<<<<<< HEAD
import { useQuiz } from "./QuizContext";

function Progress() {
  const { index, answer, points, numQuestions, maxPossiblePoints } = useQuiz();

=======
/* eslint-disable react/prop-types */
function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
>>>>>>> d336dbe8d01eb4899400e0350b117b48e1f15e68
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points} </strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
