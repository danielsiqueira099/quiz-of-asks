import * as React from "react";
import { useNavigate } from "react-router-dom"

import useApi from "../../services/useApi";

import { useNumbersQuestions } from "../../contexts/NumberQuestions";
import { useQuestionsResponse } from "../../contexts/QuestionsResponse";

import { shuffleArray } from "../../utils/shuffleArray";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./styles.css";

export function Buttons(props) {
  const { setRenderButtons } = props
  const { numberQuestions } = useNumbersQuestions();
  const { setQuestionsResponse } = useQuestionsResponse();
  const { get } = useApi();
  const navigate = useNavigate();

  const getQuestionNumber = async () => {
    const response = await get(numberQuestions);

    const shufflingIssues = response.results.map((item) => {
      let answers = [...item.incorrect_answers, item.correct_answer];

      return {
        ...item,
        answers: shuffleArray(answers),
      };
    });

    navigate("/quiz");
    setQuestionsResponse(shufflingIssues);
  };

  const handleSubmitButtonCancel = () => {
    setRenderButtons(false);
  }

  return (
    <div className="container-buttons">
      <Stack spacing={2} className="stack">
        <Button
          variant="contained"
          color="success"
          onClick={() => getQuestionNumber()}
        >
          Start
        </Button>
        <Button variant="outlined" color="error" onClick={handleSubmitButtonCancel}>
          Cancel
        </Button>
      </Stack>
    </div>
  );
}
