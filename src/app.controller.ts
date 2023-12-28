import { Controller, Get, Post, Delete, Put, Patch } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  PostHello(): string {
    return this.appService.getHello();
  }

  @Put()
  PutHello(): string {
    return this.appService.getHello();
  }


  @Patch()
  PatchHello(): string {
    return this.appService.getHello();
  }

  @Delete()
  DeleteHello(): string {
    return this.appService.getHello();
  }
}
