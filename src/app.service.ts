import { Injectable } from '@nestjs/common';

// workspace of the application. Controllers will use Services to query databases, process data, interact with external apiS
// responsible for the application's functionality


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
