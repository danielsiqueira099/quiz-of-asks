import React, { useState } from "react";
import { Buttons } from "../components/Buttons";
import { QuestionSelector } from "../components/QuestionSelector";

function Home() {
  const [renderButtons, setRenderButtons] = useState(false);

  return (
    <>
      {renderButtons === true ? (
        <Buttons setRenderButtons={setRenderButtons}/>
      ) : (
        <QuestionSelector setRenderButtons={setRenderButtons} />
      )}
    </>
  );
}

export default Home;
