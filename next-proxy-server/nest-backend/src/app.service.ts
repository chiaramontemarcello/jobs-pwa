import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { firstValueFrom, of } from 'rxjs';
import * as MOCKED_RESPONSE from './search.json';

@Injectable()
export class AppService {
  constructor(private http: HttpService) {}

  async search(request: Request): Promise<Object> {
    const mock = false;
    let resp;

    if (mock) {
      resp = await firstValueFrom(of({ data: MOCKED_RESPONSE }));
    } else {
      resp = await firstValueFrom(
        this.http.get('https://jobs.ch/api/v1/public/search', {
          params: { rows: 5 },
        }),
      );
    }

    return resp.data;
  }
}
