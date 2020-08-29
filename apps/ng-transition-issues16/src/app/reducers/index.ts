import { createSelector } from '@ngrx/store';

import * as appReducer from './app.reducer';

export interface State {
  app: appReducer.State;
}

export const selectApp = (state: State) => state.app;
export const selectAppSlideOpened = createSelector(
  selectApp,
  (state: appReducer.State) => state.slideOpened
);
