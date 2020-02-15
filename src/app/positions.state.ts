import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props
} from '@ngrx/store';

import { AppState, ackAllSuccess } from './state';

export const ackPosition = createAction(
  'ACK_POSITION',
  props<{ position: string }>()
);

export const positionsReceived = createAction(
  'POSITION_RECEIVED',
  props<{ positions: PositionState }>()
);

const defaultPositionState: PositionState = {
  newPositions: [],
  currentPositions: []
};

export interface PositionState {
  newPositions: string[];
  currentPositions: string[];
}

export const positionReducer = createReducer(
  defaultPositionState,
  on(ackPosition, (state, action) =>
    acknowledgePosition(action.position, state)
  ),
  on(ackAllSuccess, state => {
    return {
      currentPositions: [
        ...state.currentPositions,
        ...state.newPositions
      ],
      newPositions: []
    };
  }),
  on(positionsReceived, (_state, action) => action.positions)
);

function acknowledgePosition(
  position: string,
  currentState: PositionState
): PositionState {
  const newPositions = currentState.newPositions.filter(
    x => x !== position
  );
  const currentPositions = [
    ...currentState.currentPositions,
    position
  ];
  return { newPositions, currentPositions };
}

// createSelector will memoize (cache) the result, meaning it will
// give the same object until the state changes
const getPositionState = createFeatureSelector<
  AppState,
  PositionState
>('positions');

export const getNewPositions = createSelector(
  getPositionState,
  state => state.newPositions
);

export const getCurrentPositions = createSelector(
  getPositionState,
  state => state.currentPositions
);
