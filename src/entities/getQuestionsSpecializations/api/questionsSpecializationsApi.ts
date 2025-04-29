import type { SpecializationsResponse } from 'entities/getQuestionsSpecializations/model/SpecializationResponseType.ts';
import { baseApi } from 'shared/api/baseApi.ts';

export const questionsSpecializationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecialization: builder.query<SpecializationsResponse, void>({
      query: () => `/specializations`,
      providesTags: ['Specialization'],
    }),
  }),
});

export const { useGetSpecializationQuery } = questionsSpecializationsApi;
