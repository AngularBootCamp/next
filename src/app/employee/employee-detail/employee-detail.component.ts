import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html'
})
export class EmployeeDetailComponent {
  id: Observable<string>;

  constructor(route: ActivatedRoute) {
    console.log('Creating new instance of EmployeeDetailComponent');
    this.id = route.paramMap.pipe(
      tap(params =>
        console.log(
          'Got new value for param',
          params.get('employeeId')
        )
      ),
      // The only time employeeId would not be defined would be if the developer creates a typo in 'employeeId'
      // OK to assert that the result is a string
      map(params => params.get('employeeId') as string)
    );
  }
}
