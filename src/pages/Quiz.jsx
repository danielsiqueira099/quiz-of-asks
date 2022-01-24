import React from "react";
import { Form, Formik } from "formik";

import { useQuestionsResponse } from "../contexts/QuestionsResponse";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

function Quiz() {
  const { questionsResponse } = useQuestionsResponse();
  const navigate = useNavigate();

  const handleSubmit = (value) => {
    const questions = Object.keys(value);
    const storeAnswer = [];
    let respCorreta = 0;
    let respIncorreta = 0;

    questions.forEach((question) => {
      questionsResponse.forEach((res) => {
        if (res.question === question) {
          const verificandoResp = value[question] === res.correct_answer;

          // adição de respostas certas e erradas
          verificandoResp === true ? (respCorreta += 1) : (respIncorreta += 1);

          storeAnswer.push({
            pergunta: question,
            respostaVerificada: verificandoResp,
            respostaDoUsuario: value[question],
            repostaCorreta: res.correct_answer,
          });
        }
      });
    });

    localStorage.setItem(
      "storeAnswer",
      JSON.stringify({
        storeAnswer,
        quntdRespCorreta: respCorreta,
        quntdRespIncorreta: respIncorreta,
      })
    );

    navigate("/report");
  };

  return (
    <div>
      <Formik initialValues={{}} onSubmit={(values) => handleSubmit(values)}>
        {({ handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            {questionsResponse.map((item) => {
              return (
                <div
                  key={item.question}
                  style={{ margin: "20px", borderBottom: "1px solid" }}
                >
                  <Typography variant={"h5"}>
                    {item.question
                      .replace(/&quot;/g, '"')
                      .replace(/&#039;/g, '"')}
                  </Typography>
                  <RadioGroup>
                    {item.answers.map((res) => {
                      return (
                        <div key={res}>
                          <FormControlLabel
                            value={res}
                            onChange={handleChange}
                            control={
                              <Radio
                                sx={{
                                  "& .MuiSvgIcon-root": {
                                    fontSize: 22,
                                  },
                                }}
                              />
                            }
                            name={item.question}
                            label={res}
                          />
                        </div>
                      );
                    })}
                  </RadioGroup>
                </div>
              );
            })}
            <Button
              type="submit"
              variant="contained"
              color="success"
              style={{ margin: "30px 0 0 20px" }}
            >
              Finalizar quiz
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Quiz;
