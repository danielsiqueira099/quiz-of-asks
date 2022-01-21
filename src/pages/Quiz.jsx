import React, { useState } from "react";
import { Formik } from "formik";

import { useQuestionsResponse } from "../contexts/QuestionsResponse";

function Quiz() {
  const { questionsResponse } = useQuestionsResponse();

  const onSubmit = (value) => {
    //04 - O usuário deve escolher uma resposta 
    // a cada resposta deve contabilizar quantidade de acertos e erros.

    // - ter um array de objetos, que armazenará a resposta se for correta ou errada e a pergunta da questão.

    console.log(value)

    const questions = Object.keys(value);
    const storeAnswer = [];
    let respCorreta = 0;
    let respIncorreta = 0;

    questions.forEach((question) => {
      questionsResponse.forEach((res) => {
        // console.log("__________________________________________")
        // console.log("comparação",res.correct_answer ) // respota correta
        // console.log("questão", question) // questão apresentada
        // console.log("testeee", value[question]) // resposta escolhida pelo usuario

        if (res.question === question) {
          const verificandoResp = value[question] === res.correct_answer;
          
          verificandoResp === true ? respCorreta += 1 : respIncorreta += 1

          console.log("respCorreta", respCorreta);
          console.log("respIncorreta", respIncorreta);


          storeAnswer.push({
            pergunta: question,
            respostaVerificada: verificandoResp,
            respostaDoUsuario: value[question],
            repostaCorreta: res.correct_answer
          });
        }
      });
    });
  };

  return (
    <div>
      <Formik initialValues={{}} onSubmit={(values) => onSubmit(values)}>
        {({ handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            {questionsResponse.map((item) => {
              return (
                <div key={item.question}>
                  <p>{item.question}</p>
                  {item.answers.map((res) => {
                    return (
                      <div key={res}>
                        <input
                          type="radio"
                          id={res}
                          name={item.question}
                          value={res}
                          onChange={handleChange}
                        />
                        <label htmlFor={res}>{res}</label>
                      </div>
                    );
                  })}
                </div>
              );
            })}
            <button type="submit">Salvarr</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Quiz;
