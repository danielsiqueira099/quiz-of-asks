import React from "react";

import debounce from 'lodash.debounce';

import { useNumbersQuestions } from "../../contexts/NumberQuestions";

import "./styles.css";

export function QuestionSelector(props) {
  const { setRenderButtons } = props;
  const { setNumberQuestions } = useNumbersQuestions();

  const debouncedSave = debounce((e) => {
    return (
      setRenderButtons(true),
      setNumberQuestions(e.target.value)
    )
  }, 1500)

  return (
    <div className="container-selector">
      <h2>Quantidade de perguntas</h2>
      <p>
        Selecione a baixo a quantidade de perguntas você gostaria de reponder
      </p>

      <input
        className="quantity-number"
        type="number"
        onChange={debouncedSave}
      />
    </div>
  );
}
