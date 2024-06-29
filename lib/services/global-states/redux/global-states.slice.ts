import { createSlice } from '@reduxjs/toolkit';
import { SERVICE_NAME } from '../constants';
import { setUserCase } from './global-states.reducers';
import { GlobalStatesState } from './type';

const initialState: GlobalStatesState = { user: null };

// Create redux slice
export const globalStatesSlice = createSlice({
  name: SERVICE_NAME,
  initialState,
  reducers: {
    setUser: setUserCase,
  },
});

// Export actions
export const { setUser } = globalStatesSlice.actions;

// Export reducer
export const globalStatesReducer = globalStatesSlice.reducer;
