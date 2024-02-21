import { PayloadAction } from '@reduxjs/toolkit';
import { DemoStatesState } from './type';

export const setDemo: (
  state: DemoStatesState,
  action: PayloadAction<string>,
) => void = (state, action) => {
  state.demo = action.payload;
};
