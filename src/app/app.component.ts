import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

const apiUrl = 'https://api.angularbootcamp.com';

interface Employee {
  first_name: string;
  last_name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  employeeData: Employee[] = [];

  constructor(http: HttpClient) {
    http
      .get<Employee[]>(apiUrl + '/employees')
      .subscribe(employees => (this.employeeData = employees));
  }
}
