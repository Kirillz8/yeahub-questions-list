import { createBrowserRouter, Navigate } from 'react-router-dom';
import { PublicQuestions } from '../pages/PublicQuestions/ui/PublicQuestions.tsx';
import { PublicQuestion } from '../entities/QuestionsList/PublicQuestion/ui/PublicQuestion.tsx';
import { Page404 } from '../shared/comonents/Page404/Page404.tsx';
import App from './App.tsx';

export const Path = {
  PublicQuestions: 'questions/public-questions',
  PublicQuestion: ':id',
} as const;

export const rootRouter = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={Path.PublicQuestions} replace />,
  },
  {
    path: Path.PublicQuestions,
    element: <App />,
    children: [
      {
        index: true,
        element: <PublicQuestions />,
      },
      {
        path: Path.PublicQuestion,
        element: <PublicQuestion />,
      },
      {
        path: '*',
        element: <Page404 />,
      },
    ],
  },
]);
