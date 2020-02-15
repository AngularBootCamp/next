import { InjectionToken } from '@angular/core';
import { Action, ActionReducerMap } from '@ngrx/store';

import { employeeReducer } from './employees.state';
import { positionReducer } from './positions.state';
import { AppState } from './state';

// Register your reducers with NgRx framework in an AOT-compatible way
export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<AppState, Action>
>('Root reducers token', {
  factory: () => ({
    employees: employeeReducer,
    positions: positionReducer
  })
});
