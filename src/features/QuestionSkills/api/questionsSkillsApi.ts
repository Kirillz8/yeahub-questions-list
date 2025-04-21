import { baseApi } from 'app/baseApi/baseApi.ts';
import type { SkillsResponse } from 'features/QuestionSkills/model/questionsSkillsType.ts';

export const questionsSkillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<SkillsResponse, void>({
      query: () => `/skills`,
      providesTags: ['Skills'],
    }),
  }),
});

export const { useGetSkillsQuery } = questionsSkillsApi;
