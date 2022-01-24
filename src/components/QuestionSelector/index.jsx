import React from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";

import debounce from "lodash.debounce";

import { useNumbersQuestions } from "../../contexts/NumberQuestions";

import "./styles.css";

export function QuestionSelector(props) {
  const { setRenderButtons } = props;
  const { setNumberQuestions } = useNumbersQuestions();
  const navigate = useNavigate();

  const debouncedSave = debounce((e) => {
    return setRenderButtons(true), setNumberQuestions(e.target.value);
  }, 1500);

  return (
    <>
      <Typography variant={"h3"} className="header">
        <strong>Quiz of Asks</strong>
      </Typography>
      <div className="container-selector">
        <div className="information">
          <Typography variant={"h4"}>Quantidade de perguntas</Typography>
          <Typography variant={"h7"}>
            Selecione a baixo a quantidade de perguntas você gostaria de
            reponder
          </Typography>
        </div>

        <>
          <Typography variant={"p"} className="info-time">
            <strong>Ao escolher a quantidade de perguntas aguarde um momento!</strong>
          </Typography>
          <TextField
            className="quantity-number"
            label="Quantidade de perguntas"
            variant="outlined"
            type="number"
            onChange={debouncedSave}
          />
        </>
        <div className="button-last-quiz">
          <Typography variant={"h6"}>
            Deseja visualizar seu ultimo quiz?
          </Typography>
          <Button onClick={() => navigate("/report")} variant="contained">
            Visualizar seu ultimo quiz
          </Button>
        </div>
      </div>
    </>
  );
}
