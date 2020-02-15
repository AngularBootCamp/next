import { Component } from '@angular/core';

import {
  Employee,
  EmployeeLoaderService
} from './employee-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  employeeData: Employee[] = [];

  constructor(svc: EmployeeLoaderService) {
    svc
      .loadEmployees()
      .subscribe(employees => (this.employeeData = employees));
  }
}
