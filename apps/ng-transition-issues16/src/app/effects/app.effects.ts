import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { concatMap, tap, withLatestFrom } from 'rxjs/operators';

import * as appActions from '../actions/app.actions';
import * as reducersRoot from '../reducers';

@Injectable()
export class AppEffects {

  reactToSlideToggle$ = createEffect(() => this.actions$.pipe(
    ofType(appActions.userClickedSlideToggle),
    concatMap(action => of(action).pipe(withLatestFrom(this.store$))),
    tap(console.log)
  ), { dispatch: false });

  constructor(private actions$: Actions,
              private store$: Store<reducersRoot.State>) {}
}
