import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LetModule, PushModule } from '@rx-angular/template';
import { NgTransitionModule } from 'ng-transition';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    LetModule,
    PushModule,
    NgTransitionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
