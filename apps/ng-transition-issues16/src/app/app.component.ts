import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@ng-transition-issues16/api-interfaces';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ng-transition-issues16-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  showSlide$ = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) {}
}
