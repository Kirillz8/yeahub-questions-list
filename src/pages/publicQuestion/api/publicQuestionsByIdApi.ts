import { baseApi } from 'app/baseApi/baseApi.ts';
import type { QuestionLong } from 'entities/question';

export const publicQuestionsByIdApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPublicQuestionsById: builder.query<QuestionLong, { id: number }>({
      query: ({ id }) => `/questions/public-questions/${id}`,
      providesTags: ['PublicQuestion'],
    }),
  }),
});

export const { useGetPublicQuestionsByIdQuery } = publicQuestionsByIdApi;
