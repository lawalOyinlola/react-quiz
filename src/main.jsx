import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./index.css";
<<<<<<< HEAD
import { QuizProvider } from "./components/QuizContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
=======

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
>>>>>>> d336dbe8d01eb4899400e0350b117b48e1f15e68
  </StrictMode>
);
