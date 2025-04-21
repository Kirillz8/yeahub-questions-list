import { baseApi } from 'app/baseApi/baseApi.ts';
import type { QuestionsResponse } from 'entities/question';

export const publicQuestionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPublicQuestions: builder.query<QuestionsResponse, { page: number; limit: number }>({
      query: ({ page, limit }) => `/questions/public-questions?page=${page}&limit=${limit}`,
      providesTags: ['PublicQuestions'],
    }),
  }),
});

export const { useGetPublicQuestionsQuery } = publicQuestionsApi;
