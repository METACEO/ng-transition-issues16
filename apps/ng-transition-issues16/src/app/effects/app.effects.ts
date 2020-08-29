import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { concatMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';

import * as appActions from '../actions/app.actions';
import * as reducersRoot from '../reducers';

@Injectable()
export class AppEffects {

  reactToSlideToggle$ = createEffect(() => this.actions$.pipe(
    ofType(appActions.userClickedSlideToggle),
    concatMap(action => of(action).pipe(withLatestFrom(this.store$))),
    tap(console.log)
  ), { dispatch: false });

  userClickedSomewhereHandleDropdown$ = createEffect(() => this.actions$.pipe(
    ofType(appActions.userClickedSomewhereHandleDropdown),
    concatMap(action => of(action).pipe(withLatestFrom(this.store$))),
    switchMap(([action, store]) => {
      const { profileDropdown, target } = action;
      const { profileDropdownOpened } = store.app;
      // If there's no good input or we're
      // not even open, short-circuit.
      if (!target || !profileDropdown || !profileDropdownOpened) {
        return EMPTY;
      }
      // Otherwise close the popout if the
      // click is outside our container.
      if (!profileDropdown.contains(target)) {
        return of(appActions.userClickedProfileButton());
      }
      return EMPTY;
    })
  ));

  constructor(private actions$: Actions,
              private store$: Store<reducersRoot.State>) {}
}
