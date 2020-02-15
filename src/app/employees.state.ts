import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props
} from '@ngrx/store';

import { AppState, ackAllSuccess } from './state';

export const ackEmployee = createAction(
  'ACK_EMPLOYEE',
  props<{ employee: string }>()
);

export const employeesReceived = createAction(
  'EMPLOYEES_RECEIVED',
  props<{ employees: EmployeeState }>()
);

export interface EmployeeState {
  newEmployees: string[];
  currentEmployees: string[];
}

const defaultEmployeeState: EmployeeState = {
  newEmployees: [],
  currentEmployees: []
};

export const employeeReducer = createReducer(
  defaultEmployeeState,
  on(ackEmployee, (state, action) =>
    acknowledgeEmployee(state, action.employee)
  ),
  on(ackAllSuccess, state => {
    return {
      currentEmployees: [
        ...state.currentEmployees,
        ...state.newEmployees
      ],
      newEmployees: []
    };
  }),
  on(employeesReceived, (_state, action) => action.employees)
);

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
const getEmployeeState = createFeatureSelector<
  AppState,
  EmployeeState
>('employees');

export const getNewEmployees = createSelector(
  getEmployeeState,
  state => [...state.newEmployees]
);

export const getCurrentEmployees = createSelector(
  getEmployeeState,
  state => [...state.currentEmployees]
);
