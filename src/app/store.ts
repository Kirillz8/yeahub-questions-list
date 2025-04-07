import { configureStore } from '@reduxjs/toolkit';
import { publicQuestionsApi } from '../pages/PublicQuestions/api/publicQuestionsApi.ts';

export const store = configureStore({
  reducer: {
    [publicQuestionsApi.reducerPath]: publicQuestionsApi.reducer,
    // Добавьте другие редьюсеры по мере необходимости
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(publicQuestionsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
