import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { GlobalStatesState } from './type';
import { User } from '@lib/models/user';

export const setUserCase: CaseReducer<
  GlobalStatesState,
  PayloadAction<User | null>
> = (state, action) => {
  state.user = action.payload;

  if (state.user?.accessToken)
    document.cookie = `accessToken=${state.user.accessToken}`;
  else document.cookie = `accessToken=`;
};
