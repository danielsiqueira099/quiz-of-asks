import NumberQuestionsProvider from "../contexts/NumberQuestions";
import Home from "./Home";

function App() {
  return (
    <NumberQuestionsProvider>
      <Home />
    </NumberQuestionsProvider>
  );
}

export default App;
