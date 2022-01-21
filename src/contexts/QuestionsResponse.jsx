import React, { createContext, useState, useContext } from "react";

const QuestionsResponseContext = createContext();

export default function QuestionsResponseProvider({ children }) {
  const [questionsResponse, setQuestionsResponse] = useState([]);

  return (
    <QuestionsResponseContext.Provider value={{ questionsResponse, setQuestionsResponse }}>
      {children}
    </QuestionsResponseContext.Provider>
  );
}

export function useQuestionsResponse() {
  const context = useContext(QuestionsResponseContext);
  const { questionsResponse, setQuestionsResponse } = context;
  return { questionsResponse, setQuestionsResponse };
}