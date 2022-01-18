import React from "react";
import { get } from "../../services/request";
import './styles.css'

export function QuestionSelector() {
  const response = get(3);

  console.log(response);
  
  return (
    <div className="container-selector">
      <h2>Quantidade de perguntas</h2>
      <p>
        Selecione a baixo a quantidade de perguntas você gostaria de reponder
      </p>

      <input className="quantity-number" type="number" />
    </div>
  );
}
