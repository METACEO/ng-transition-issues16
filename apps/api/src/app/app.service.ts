import { Injectable } from '@nestjs/common';
import { Message } from '@ng-transition-issues16/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
