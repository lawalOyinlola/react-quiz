import "../App.css";
import Header from "./Header";
import MainBody from "./MainBody";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";
import Timer from "./Timer";
import Footer from "./Footer";
import { useQuiz } from "./QuizContext";
// import BankAccount from "./Challenge_BankAccount";

function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      {/* <BankAccount /> */}
      <Header />
      <MainBody>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishedScreen />}
      </MainBody>
    </div>
  );
}

export default App;
