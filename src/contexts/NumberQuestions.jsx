import React, { createContext, useState, useContext } from "react";

const NumberQuestionsContext = createContext();

export default function NumberQuestionsProvider({ children }) {
  const [numberQuestions, setNumberQuestions] = useState(0);

  return (
    <NumberQuestionsContext.Provider value={{ numberQuestions, setNumberQuestions }}>
      {children}
    </NumberQuestionsContext.Provider>
  );
}

export function useNumbersQuestions() {
  const context = useContext(NumberQuestionsContext);
  const { numberQuestions, setNumberQuestions } = context;
  return { numberQuestions, setNumberQuestions };
}