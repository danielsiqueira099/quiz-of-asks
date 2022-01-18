import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./styles.css";

export function Buttons() {
  return (
    <div className="container-buttons">
      <Stack spacing={2} className='stack'>
        <Button variant="contained" color="success">
          Start
        </Button>
        <Button variant="outlined" color="error">
          Cancel
        </Button>
      </Stack>
    </div>
  );
}
