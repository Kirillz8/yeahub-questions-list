import type { QuestionLong } from 'entities/questions/model/types.ts';
import { baseApi } from 'shared/api/baseApi.ts';

export const publicQuestionsByIdApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPublicQuestionsById: builder.query<QuestionLong, { id: number }>({
      query: ({ id }) => `/questions/public-questions/${id}`,
      providesTags: ['PublicQuestion'],
    }),
  }),
});

export const { useGetPublicQuestionsByIdQuery } = publicQuestionsByIdApi;
