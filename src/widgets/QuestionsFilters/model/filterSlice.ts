import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  query: string;
  specialization: number | null;
  skills: number | null;
  rate: number | null;
  complexity: [number, number] | null;
}

const initialState: SearchState = { query: '', specialization: null, skills: null, rate: null, complexity: null };

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
  },
});

export const { setSearchQuery, setSpecialization, setSkills, setRate, setComplexity } = filterSlice.actions;
export default filterSlice.reducer;
