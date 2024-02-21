import { createSlice } from '@reduxjs/toolkit';
import { DemoStatesState } from './type';
import { setDemo } from '@lib/services/demo/demo.reducers';

const initialState: DemoStatesState = { demo: '' };

// Create redux slice
export const demoStatesSlice = createSlice({
  name: 'SERVICE_NAME',
  initialState,
  reducers: {
    setDemoFunc: setDemo,
  },
});

// Export actions
export const { setDemoFunc } = demoStatesSlice.actions;

export const demoStatesSelector = (state: { demoStates: DemoStatesState }) =>
  state.demoStates.demo;

// Export reducer
export const demoStatesReducer = demoStatesSlice.reducer;
