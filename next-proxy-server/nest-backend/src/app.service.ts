import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Request, response } from 'express';
import { EMPTY, firstValueFrom, Observable, of } from 'rxjs';
import * as MOCKED_RESPONSE from './search.json';

@Injectable()
export class AppService {
  constructor(private http: HttpService) {}

  async search(request: Request): Promise<Object> {
    // const resp = await firstValueFrom(
    //   this.http.get('https://jobs.ch/api/v1/public/search'),
    // );

    const resp = await firstValueFrom(of({ data: MOCKED_RESPONSE }));

    return resp.data;
  }
}
