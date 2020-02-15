import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Employee, TableOptions } from '../employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  @Input() employees: Employee[] = [];
  @Input() options: TableOptions | undefined;

  headers = [
    {
      propertyName: 'first_name',
      display: 'First Name'
    },
    {
      propertyName: 'last_name',
      display: 'Last Name'
    },
    {
      propertyName: 'hours_worked',
      display: 'Hours Worked'
    },
    {
      propertyName: 'hourly_wage',
      display: 'Hourly Wage'
    }
  ];

  constructor(private router: Router) {}

  headerClicked(sortBy: string) {
    if (this.options && this.options.sortBy === sortBy) {
      this.changeDirection();
    } else {
      const queryParams = { sortBy, sortDirection: undefined };
      void this.router.navigate([], {
        queryParams,
        queryParamsHandling: 'merge'
      });
    }
  }

  changeDirection() {
    if (this.options) {
      const sortDirection =
        this.options.sortDirection === 'asc' ? 'desc' : 'asc';
      const queryParams = { sortDirection };
      void this.router.navigate([], {
        queryParams,
        queryParamsHandling: 'merge'
      });
    }
  }
}
