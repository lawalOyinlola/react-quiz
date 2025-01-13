<<<<<<< HEAD
import { useEffect } from "react";
import { useQuiz } from "./QuizContext";

function Timer() {
  const { secondsRemaining, dispatch } = useQuiz();

=======
/* eslint-disable react/prop-types */
import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
>>>>>>> d336dbe8d01eb4899400e0350b117b48e1f15e68
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
