import { configureStore } from '@reduxjs/toolkit';
import { publicQuestionsApi } from '../entities/publicQuestions/publicQuestionsApi.ts';
// Импортируйте ваш API-слайс, созданный с помощью RTK Query

export const store = configureStore({
  reducer: {
    // Добавляем редьюсер API-слайса
    [publicQuestionsApi.reducerPath]: publicQuestionsApi.reducer,
    // Добавьте другие редьюсеры по мере необходимости
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(publicQuestionsApi.middleware),
});

// Типы для удобной работы с типизацией в приложении
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
