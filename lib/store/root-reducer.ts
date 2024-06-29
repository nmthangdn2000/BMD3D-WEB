import { globalStatesReducer } from '@lib/services/global-states';

// Combine all service reducers
export const rootReducer = {
  globalStates: globalStatesReducer,
};
