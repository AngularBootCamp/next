import { createAction } from '@ngrx/store';

import { EmployeeState } from './employees.state';
import { PositionState } from './positions.state';

export const ackAll = createAction('ACK_ALL');

export interface AppState {
  employees: EmployeeState;
  positions: PositionState;
}
