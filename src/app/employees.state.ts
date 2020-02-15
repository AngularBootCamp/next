import {
  Action,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import {
  DataReceivedAction,
  ackAllSuccess,
  dataReceived
} from './state';

export const ackEmployee = 'ACK_EMPLOYEE';
export class AckEmployeeAction implements Action {
  readonly type = ackEmployee;
  constructor(readonly payload: string) {}
}

export interface EmployeeState {
  newEmployees: string[];
  currentEmployees: string[];
}

const defaultEmployeeState: EmployeeState = {
  newEmployees: [],
  currentEmployees: []
};

export function employeeReducer(
  state: EmployeeState = defaultEmployeeState,
  action: Action
): EmployeeState {
  switch (action.type) {
    case ackEmployee:
      return acknowledgeEmployee(
        state,
        (action as AckEmployeeAction).payload
      );
    case ackAllSuccess:
      return {
        currentEmployees: [
          ...state.currentEmployees,
          ...state.newEmployees
        ],
        newEmployees: []
      };
    case dataReceived:
      const a = action as DataReceivedAction;
      return a.data.employees;
    default:
      return state;
  }
}

function acknowledgeEmployee(
  currentState: EmployeeState,
  employee: string
): EmployeeState {
  const newEmployees = currentState.newEmployees.filter(
    x => x !== employee
  );
  const currentEmployees = [
    ...currentState.currentEmployees,
    employee
  ];
  return { newEmployees, currentEmployees };
}

// defensive copy of the data coming out of the store
// createSelector will memoize (cache) the result, meaning it will
// give the same object until the state changes
const getEmployeeState = createFeatureSelector<EmployeeState>(
  'employees'
);

export const getNewEmployees = createSelector(
  getEmployeeState,
  state => [...state.newEmployees]
);

export const getCurrentEmployees = createSelector(
  getEmployeeState,
  state => [...state.currentEmployees]
);
