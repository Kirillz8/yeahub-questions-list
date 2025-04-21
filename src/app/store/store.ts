import { configureStore } from '@reduxjs/toolkit';
import { publicQuestionsApi } from 'entities/questions';
import searchReducer from 'widgets/QuestionsFilters/model/filterSlice.ts';

export const store = configureStore({
  reducer: {
    [publicQuestionsApi.reducerPath]: publicQuestionsApi.reducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(publicQuestionsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
