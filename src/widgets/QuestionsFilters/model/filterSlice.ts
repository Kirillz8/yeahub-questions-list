import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Question } from 'entities/questions/model/types.ts';

interface SearchState {
  query: string;
  specialization: number | null;
  skills: number | null;
  rate: number | null;
  complexity: [number, number] | null;
  rawQuestions: Question[];
  filteredQuestions: Question[];
}

const initialState: SearchState = {
  query: '',
  specialization: null,
  skills: null,
  rate: null,
  complexity: null,
  rawQuestions: [],
  filteredQuestions: [],
};

const filterSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setSpecialization: (state, action: PayloadAction<number | null>) => {
      state.specialization = action.payload;
    },
    setSkills: (state, action: PayloadAction<number | null>) => {
      state.skills = action.payload;
    },
    setRate: (state, action: PayloadAction<number | null>) => {
      state.rate = action.payload;
    },
    setComplexity: (state, action: PayloadAction<[number, number] | null>) => {
      state.complexity = action.payload;
    },
    setRawQuestions(state, action: PayloadAction<Question[]>) {
      state.rawQuestions = action.payload;
    },
    applyFilters(state, action: PayloadAction<Question[]>) {
      const source = action.payload;
      state.filteredQuestions = source.filter((q) => {
        const matchQuery = q.title.toLowerCase().includes(state.query.toLowerCase());
        const matchRate = !state.rate || q.rate === state.rate;
        const matchComplexity =
          !state.complexity ||
          (Array.isArray(state.complexity)
            ? q.complexity >= state.complexity[0] && q.complexity <= state.complexity[1]
            : q.complexity === state.complexity);
        const matchSpec = !state.specialization || q.questionSpecializations.some((s) => s.id === state.specialization);
        const matchSkill = !state.skills || q.questionSkills.some((s) => s.id === state.skills);

        return matchQuery && matchRate && matchComplexity && matchSpec && matchSkill;
      });
    },
  },
});

export const { setSearchQuery, setSpecialization, setSkills, setRate, setComplexity, setRawQuestions, applyFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
