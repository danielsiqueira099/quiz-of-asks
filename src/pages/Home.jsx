import React from 'react';
import { Buttons } from '../components/Buttons';
import { QuestionSelector } from '../components/QuestionSelector';

function Home() {
  return (
    <>
      <QuestionSelector />
      <Buttons />
    </>
  );
}

export default Home;