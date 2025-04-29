import { baseApi } from 'shared/api/baseApi.ts';
import type { SkillsResponse } from 'entities/getQuestionsSkills/model/questionsSkillsType.ts';

export const questionsSkillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<SkillsResponse, void>({
      query: () => `/skills`,
      providesTags: ['Skills'],
    }),
  }),
});

export const { useGetSkillsQuery } = questionsSkillsApi;
