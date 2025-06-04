
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  subjectTab: 'Physics' | 'Chemistry' | 'Mathematics';
  classFilters: string[];
  unitFilters: string[];
  statusFilters: string[];
  weakToggle: boolean;
  sortOrder: 'asc' | 'desc';
}

const initialState: FiltersState = {
  subjectTab: 'Physics',
  classFilters: [],
  unitFilters: [],
  statusFilters: [],
  weakToggle: false,
  sortOrder: 'asc',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSubjectTab: (state, action: PayloadAction<'Physics' | 'Chemistry' | 'Mathematics'>) => {
      state.subjectTab = action.payload;
      // Reset filters when switching tabs
      state.classFilters = [];
      state.unitFilters = [];
      state.statusFilters = [];
    },
    setClassFilters: (state, action: PayloadAction<string[]>) => {
      state.classFilters = action.payload;
    },
    setUnitFilters: (state, action: PayloadAction<string[]>) => {
      state.unitFilters = action.payload;
    },
    setStatusFilters: (state, action: PayloadAction<string[]>) => {
      state.statusFilters = action.payload;
    },
    setWeakToggle: (state, action: PayloadAction<boolean>) => {
      state.weakToggle = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.sortOrder = action.payload;
    },
  },
});

export const {
  setSubjectTab,
  setClassFilters,
  setUnitFilters,
  setStatusFilters,
  setWeakToggle,
  setSortOrder,
} = filtersSlice.actions;

export default filtersSlice.reducer;
