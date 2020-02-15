import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { delay, tap } from 'rxjs/operators';

import {
  Employee,
  EmployeeLoaderService
} from './employee-loader.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRetrieverService implements Resolve<Employee> {
  constructor(private loader: EmployeeLoaderService) {}

  resolve(route: ActivatedRouteSnapshot) {
    console.log('started retrieving employee');
    const employeeId = route.paramMap.get('employeeId') as string;
    return this.loader.getDetails(employeeId).pipe(
      delay(3000), // Simulate backend latency
      tap(x => console.log('employee information arrived', x))
    );
  }
}
