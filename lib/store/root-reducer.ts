import { demoStatesReducer } from '@lib/services/demo/demo.slice';

// Combine all service reducers
export const rootReducer = {
  demoStates: demoStatesReducer,
};
