import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { EmployeeState, employeesReceived } from '../employees.state';
import { PositionState, positionsReceived } from '../positions.state';
import { AppState, ackAll } from '../state';

@Component({
  selector: 'notification-manager',
  templateUrl: './notification-manager.component.html'
})
export class NotificationManagerComponent {
  constructor(private store: Store<AppState>) {
    const employees: EmployeeState = {
      currentEmployees: [
        'Alice Anderson',
        'Billy Burton',
        'Carol Carson',
        'David Dennison'
      ],
      newEmployees: ['Erin Ericcson', 'Frank Ferdinand']
    };

    const positions: PositionState = {
      currentPositions: [
        'Copier',
        'Secretary to Customer Design Spec Engineer',
        'Tester',
        'Phone Bank Worker'
      ],
      newPositions: ['Manager', 'Break Room Attendant']
    };

    store.dispatch(employeesReceived({ employees }));
    store.dispatch(positionsReceived({ positions }));
  }

  ackAll() {
    this.store.dispatch(ackAll());
  }
}
