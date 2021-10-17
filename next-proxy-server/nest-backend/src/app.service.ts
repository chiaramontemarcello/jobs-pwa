import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { firstValueFrom, of } from 'rxjs';
import * as MOCKED_RESPONSE from './search.json';

@Injectable()
export class AppService {
  queryParameters = new Map([
    ['rows', '20'],
    ['sort', 'date'],
  ]);

  // Mock data enabled to avoid multiple calls to API
  mock = false;

  constructor(private http: HttpService) {
    console.log(this.queryParameters, Object.fromEntries(this.queryParameters));
  }

  async search(request: Request): Promise<Object> {
    let resp = { data: {} };

    if (this.mock) {
      resp = await firstValueFrom(of({ data: MOCKED_RESPONSE }));
    } else {
      resp = await firstValueFrom(
        this.http.get('https://jobs.ch/api/v1/public/search', {
          params: request.query,
        }),
      );
    }

    return resp.data;
  }

  async getJob(request: Request): Promise<Object> {
    console.log(request.query);

    let resp = { data: {} };

    if (this.mock) {
      resp = await firstValueFrom(
        of({
          data: MOCKED_RESPONSE.documents.filter(
            (d) => d.job_id === request.params.job_id,
          ),
        }),
      );
    } else {
      resp = await firstValueFrom(
        this.http.get(
          'https://jobs.ch/api/v1/public/search/job/' + request.params.job_id,
        ),
      );
    }

    return resp.data;
  }
}
