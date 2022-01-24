import React from "react";
import { useNavigate } from "react-router-dom";

import { Typography, Button } from "@mui/material";

function Report() {
  const navigate = useNavigate();

  const storeAnswer = JSON.parse(localStorage.getItem("storeAnswer"));
  const treatmeantAnswer = Object.values(storeAnswer.storeAnswer);

  return (
    <div>
      {treatmeantAnswer.map((response) => {
        const treatment =
          response.respostaVerificada === true ? "Acertou" : "Errou";

        return (
          <div
            key={response.pergunta}
            style={{
              display: "flex",
              flexDirection: "column",
              borderBottom: "1px solid",
              margin: "20px",
            }}
          >
            <Typography variant={"h6"}>
              <strong>Questão:</strong>{" "}
              {response.pergunta.replace(/&quot;/g, '"').replace(/&#039;/g, '"')}
            </Typography>
            <Typography variant={"h6"}>
              <strong>Resposta escolhida:</strong> {response.respostaDoUsuario}
            </Typography>
            <Typography variant={"h6"}>
              <strong>Resposta correta:</strong> {response.repostaCorreta}
            </Typography>
            <Typography
              variant={"h6"}
              style={
                treatment === "Acertou" ? { color: "green" } : { color: "red" }
              }
            >
              <strong>Acertou?</strong> {treatment}
            </Typography>
          </div>
        );
      })}
      <div style={{ display: "flex", flexDirection: "column", margin: "20px" }}>
        <Typography variant={"h6"}>
          <strong>Quantidade de respostas corretas:</strong>{" "}
          {storeAnswer.quntdRespCorreta}
        </Typography>
        <Typography variant={"h6"}>
          <strong>Quantidade de respostas incorretas:</strong>{" "}
          {storeAnswer.quntdRespIncorreta}
        </Typography>
      </div>

      <Button variant="contained" onClick={() => navigate("/")} style={{ margin: '40px 0 0 20px' }}>
        Voltar para a home
      </Button>
    </div>
  );
}

export default Report;
