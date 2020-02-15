import { Injectable } from '@angular/core';
import {
  Actions,
  Effect,
  ROOT_EFFECTS_INIT,
  ofType
} from '@ngrx/effects';
import { filter, map, switchMap } from 'rxjs/operators';

import { Employee, EmployeeLoader } from './employee-loader.service';
import { ModalService } from './modal.service';
import {
  AckAllSuccessAction,
  DataReceivedAction,
  ackAll
} from './state';

const initialState = {
  positions: {
    currentPositions: [
      'Copier',
      'Secretary to Customer Design Spec Engineer',
      'Tester',
      'Phone Bank Worker'
    ],
    newPositions: ['Manager', 'Break Room Attendant']
  }
};

function toName(employee: Employee) {
  return `${employee.first_name} ${employee.last_name}`;
}

@Injectable()
export class AppEffects {
  // To use effects we will always need the action stream injected; in
  // some cases it is also helpful to inject the Store itself, with a
  // parameter like:
  // private store: Store<AppState>
  constructor(
    private actions$: Actions,
    private loader: EmployeeLoader,
    private modalSvc: ModalService
  ) {}

  // ROOT_EFFECTS_INIT is a special action that is dispatched at the end of
  // NgRx's initialization process, so this effect executes at application
  // initialization.
  @Effect()
  init$ = this.actions$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    switchMap(() => this.loader.getList()),
    map(
      employees =>
        new DataReceivedAction({
          ...initialState,
          employees: {
            currentEmployees: employees.slice(0, 4).map(toName),
            newEmployees: employees.slice(4, 6).map(toName)
          }
        })
    )
  );

  // This confirmation step could have been added at dispatch
  // instead, but it's cleaner to keep as little business logic
  // in the component as possible. Note that the output is a
  // different type of action; this is necessary to avoid an
  // infinite loop.
  @Effect()
  ackAll$ = this.actions$.pipe(
    ofType(ackAll),
    filter(() => this.modalSvc.confirm('Are you sure?')),
    map(() => new AckAllSuccessAction())
  );
}
