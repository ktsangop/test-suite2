import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {}

  public fetchData(): Observable<any> {
    return this.httpClient
      .get<any>(
        `https://raw.githubusercontent.com/ktsangop/test-suite-1/master/db.json`
      )
      .pipe(delay(3000));
  }

  public fakeLogin(userName: string, password: string) {
    const authPassed = userName === 'Vasileios' && password === 'Tsoulis';
    return of(1).pipe(
      delay(3000),
      map(() => {
        JSON.stringify(authPassed ? { login: true } : { login: false });
      })
    );
  }
}
