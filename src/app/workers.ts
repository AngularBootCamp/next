import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';

const apiUrl = 'https://api.angularbootcamp.com';

export interface Worker {
  first_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class Workers {
  constructor(private http: HttpClient) {}

  workerList() {
    const delayUntil: Date = new Date(Date.now() + 1600);
    return this.http
      .get<Worker[]>(apiUrl + '/employees')
      .pipe(delay(delayUntil));
  }
}
