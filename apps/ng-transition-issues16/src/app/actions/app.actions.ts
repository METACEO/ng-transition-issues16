import { createAction, props } from '@ngrx/store';

export const userClickedHamburgerButton = createAction('[App] User Clicked Hamburger Button');
export const userClickedProfileButton = createAction('[App] User Clicked Profile Button');
export const userClickedSlideToggle = createAction('[App] User Clicked Slide Toggle');
export const userClickedSlideExit = createAction('[App] User Clicked Slide Exit');
export const userClickedSomewhereHandleDropdown = createAction('[App] User Clicked Somewhere Handle Dropdown', props<{
  clickedWithinProfile: boolean;
}>());
