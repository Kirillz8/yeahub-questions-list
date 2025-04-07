import type { QuestionsResponse } from '../model/types.ts';
import { baseApi } from '../../../app/baseApi.ts';

export const publicQuestionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPublicQuestions: builder.query<QuestionsResponse, void>({
      query: () => '/questions/public-questions',
      providesTags: ['PublicQuestions'],
    }),
  }),
});

export const { useGetPublicQuestionsQuery } = publicQuestionsApi;
