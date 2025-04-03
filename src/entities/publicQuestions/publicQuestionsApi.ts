import type { QuestionsResponse } from '../../shared/types.ts';
import { baseApi } from '../../app/baseApi.ts';

export const publicQuestionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPublicQuestions: builder.query<QuestionsResponse, void>({
      query: () => 'questions/public-questions',
    }),
  }),
});

export const { useGetPublicQuestionsQuery } = publicQuestionsApi;
