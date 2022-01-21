import React from "react";
import ReactDOM from "react-dom";
import NumberQuestionsProvider from "./contexts/NumberQuestions";
import QuestionsResponseProvider from "./contexts/QuestionsResponse";
import { MyRouter } from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <QuestionsResponseProvider>
      <NumberQuestionsProvider>
        <MyRouter />
      </NumberQuestionsProvider>
    </QuestionsResponseProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
