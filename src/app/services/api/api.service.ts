import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/internal/operators/tap';
import {Observable} from 'rxjs';

import {configProviderToken} from './api.config';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
    @Inject(configProviderToken) private config: any
  ) {
  }

  getUsers(): Observable<any> {
    return this.httpClient.get(`${this.config.PREFIX}/users`)
      .pipe(
        tap((res => console.log(res)))
      );
  }
}
