import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// here we will receive the HTTP requests and provide responses. They serve as entry points
// we will interact with services to perform the logic

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
