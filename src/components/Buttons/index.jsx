import * as React from "react";
import useApi from "../../services/useApi";

import { useNumbersQuestions } from "../../contexts/NumberQuestions";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./styles.css";

export function Buttons() {
  const { numberQuestions } = useNumbersQuestions();
  const { get } = useApi();

  const getQuestionNumber = async () => {
    const response = await get(numberQuestions)
    console.log(response)
    return response
  }

  return (
    <div className="container-buttons">
      <Stack spacing={2} className='stack'>
        <Button variant="contained" color="success" onClick={() => getQuestionNumber()}>
          Start
        </Button>
        <Button variant="outlined" color="error">
          Cancel
        </Button>
      </Stack>
    </div>
  );
}
