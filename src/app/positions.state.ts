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

export const ackPosition = 'ACK_POSITION';
export class AckPositionAction implements Action {
  type = ackPosition;
  constructor(public payload: string) {}
}

const defaultPositionState: PositionState = {
  newPositions: [],
  currentPositions: []
};

export interface PositionState {
  newPositions: string[];
  currentPositions: string[];
}

export function positionReducer(
  state: PositionState = defaultPositionState,
  action: Action
): PositionState {
  switch (action.type) {
    case ackPosition:
      return acknowledgePosition(
        (action as AckPositionAction).payload,
        state
      );
    case ackAllSuccess:
      return {
        currentPositions: [
          ...state.currentPositions,
          ...state.newPositions
        ],
        newPositions: []
      };
    case dataReceived:
      const a = action as DataReceivedAction;
      return a.data.positions;
    default:
      return state;
  }
}

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
const getPositionState = createFeatureSelector<PositionState>(
  'positions'
);

export const getNewPositions = createSelector(
  getPositionState,
  state => state.newPositions
);

export const getCurrentPositions = createSelector(
  getPositionState,
  state => state.currentPositions
);
