import { Injectable } from '@angular/core';
import {
  Actions,
  ROOT_EFFECTS_INIT,
  createEffect,
  ofType
} from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { Employee, EmployeeLoader } from './employee-loader.service';
import { employeesReceived } from './employees.state';

function toName(employee: Employee) {
  return `${employee.first_name} ${employee.last_name}`;
}

@Injectable()
export class EmployeesEffects {
  constructor(
    private actions$: Actions,
    private loader: EmployeeLoader
  ) {}

  // ROOT_EFFECTS_INIT is a special action that is dispatched at the end of
  // NgRx's initialization process, so this effect executes at application
  // initialization.
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      switchMap(() => this.loader.getList()),
      map(employees =>
        employeesReceived({
          employees: {
            currentEmployees: employees.slice(0, 4).map(toName),
            newEmployees: employees.slice(4, 6).map(toName)
          }
        })
      )
    )
  );
}
