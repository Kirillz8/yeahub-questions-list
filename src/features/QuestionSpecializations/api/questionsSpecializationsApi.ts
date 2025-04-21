import { baseApi } from 'app/baseApi/baseApi.ts';
import type { SpecializationsResponse } from 'features/QuestionSpecializations';

export const questionsSpecializationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecialization: builder.query<SpecializationsResponse, void>({
      query: () => `/specializations`,
      providesTags: ['Specialization'],
    }),
  }),
});

export const { useGetSpecializationQuery } = questionsSpecializationsApi;
