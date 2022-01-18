import React, { useEffect, useState } from "react";
import { useNumbersQuestions } from "../../contexts/NumberQuestions";
import './styles.css'

export function QuestionSelector() {
  const { setNumberQuestions } = useNumbersQuestions();
  
  return (
    <div className="container-selector">
      <h2>Quantidade de perguntas</h2>
      <p>
        Selecione a baixo a quantidade de perguntas você gostaria de reponder
      </p>
      <input className="quantity-number" type="number" onChange={e => setNumberQuestions(e.target.value)}/>
    </div>
  );
}
