import { createReducer, on } from '@ngrx/store';

import * as appActions from '../actions/app.actions';

export interface State {
  slideOpened: boolean;
}

export const initialState: State = {
  slideOpened: false
};

const _appReducer = createReducer(
  initialState,
  on(appActions.userClickedSlideToggle, (state) => {
    return {
      ...state,
      slideOpened: !state.slideOpened
    };
  }),
  on(appActions.userClickedSlideExit, (state) => {
    return {
      ...state,
      slideOpened: false
    };
  })
);

export function appReducer(state, action) {
  return _appReducer(state, action);
}
