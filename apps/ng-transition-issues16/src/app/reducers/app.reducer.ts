import { createReducer, on } from '@ngrx/store';

import * as appActions from '../actions/app.actions';

export interface State {
  hamburgerMenuOpened: boolean;
  profileDropdownOpened: boolean;
  slideOpened: boolean;
}

export const initialState: State = {
  hamburgerMenuOpened: false,
  profileDropdownOpened: false,
  slideOpened: false
};

const _appReducer = createReducer(
  initialState,
  on(appActions.userClickedHamburgerButton, (state) => {
    return {
      ...state,
      hamburgerMenuOpened: !state.hamburgerMenuOpened
    };
  }),
  on(appActions.userClickedProfileButton, (state) => {
    return {
      ...state,
      profileDropdownOpened: !state.profileDropdownOpened
    };
  }),
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
