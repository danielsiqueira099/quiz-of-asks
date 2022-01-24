import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Quiz from '../pages/Quiz';
import Report from '../pages/Report';
import { ROUTES } from './routes';

export const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.QUIZ} element={<Quiz />} />
        <Route path={ROUTES.REPORT} element={<Report />} />
      </Routes>
    </BrowserRouter>
  );
};
