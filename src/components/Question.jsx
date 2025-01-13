<<<<<<< HEAD
import Options from "./Options";
import { useQuiz } from "./QuizContext";

function Question() {
  const { questions, index } = useQuiz();

  const question = questions.at(index);

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
=======
/* eslint-disable react/prop-types */
import Options from "./Options";

function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
>>>>>>> d336dbe8d01eb4899400e0350b117b48e1f15e68
    </div>
  );
}

export default Question;
