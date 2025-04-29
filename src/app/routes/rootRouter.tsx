import { PublicQuestionPage } from 'pages/publicQuestionPage';
import { PublicQuestionsPage } from 'pages/PublicQuestionsPage';
import { createBrowserRouter } from 'react-router-dom';
import { Page404 } from 'shared/comonents';
import BaseLayout from '../layout/BaseLayout.tsx';

export const Path = {
  PublicQuestionsPage: 'questions/public-questions',
  PublicQuestionPage: '/questions/public-questions/:id',
} as const;

export const rootRouter = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: Path.PublicQuestionsPage,
        element: <PublicQuestionsPage />,
      },
      {
        path: Path.PublicQuestionPage,
        element: <PublicQuestionPage />,
      },
      {
        path: '*',
        element: <Page404 />,
      },
    ],
  },
]);
