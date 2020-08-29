import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LetModule, PushModule } from '@rx-angular/template';
import { NgTransitionModule } from 'ng-transition';

import { AppComponent } from './app.component';
import { AppEffects } from './effects/app.effects';
import { appReducer } from './reducers/app.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ app: appReducer }),
    EffectsModule.forRoot([AppEffects]),
    HttpClientModule,
    LetModule,
    PushModule,
    NgTransitionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
