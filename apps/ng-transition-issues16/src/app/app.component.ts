import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@ng-transition-issues16/api-interfaces';
import { select, Store } from '@ngrx/store';

import * as appActions from './actions/app.actions';
import * as reducersRoot from './reducers';

@Component({
  selector: 'ng-transition-issues16-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  showHamburgerMenu$ = this.store.pipe(select(reducersRoot.selectAppHamburgerMenuOpened))
  showProfileDropdown$ = this.store.pipe(select(reducersRoot.selectAppProfileDropdownOpened))
  showSlide$ = this.store.pipe(select(reducersRoot.selectAppSlideOpened))
  constructor(private http: HttpClient,
              private store: Store<reducersRoot.State>) {}

  public userClickedHamburgerButton(): void {
    this.store.dispatch(appActions.userClickedHamburgerButton());
  }

  public userClickedProfileButton(): void {
    this.store.dispatch(appActions.userClickedProfileButton());
  }

  public userClickedSlideToggle(): void {
    this.store.dispatch(appActions.userClickedSlideToggle());
  }

  public userClickedSlideExit(): void {
    this.store.dispatch(appActions.userClickedSlideExit());
  }
}
