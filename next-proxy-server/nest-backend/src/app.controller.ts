import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/v1/public/search')
  async getSearch(@Req() request: Request) {
    return await this.appService.search(request);
  }

  @Get('/api/v1/public/search/job/:job_id')
  async getSearchsad(@Req() request: Request) {
    return await this.appService.getJob(request);
  }
}
