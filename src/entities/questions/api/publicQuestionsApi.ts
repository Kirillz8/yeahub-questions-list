import type { QuestionsResponse } from 'entities/questions/model/types.ts';
import { baseApi } from 'shared/api/baseApi.ts';

export const publicQuestionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPublicQuestions: builder.query<QuestionsResponse, { page: number; limit: number }>({
      query: ({ page, limit }) => `/questions/public-questions?page=${page}&limit=${limit}`,
      providesTags: ['PublicQuestions'],
    }),
  }),
});

export const { useGetPublicQuestionsQuery } = publicQuestionsApi;
