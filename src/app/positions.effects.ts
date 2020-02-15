import { OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { PositionState, positionsReceived } from './positions.state';

const initialPositions: PositionState = {
  currentPositions: [
    'Copier',
    'Secretary to Customer Design Spec Engineer',
    'Tester',
    'Phone Bank Worker'
  ],
  newPositions: ['Manager', 'Break Room Attendant']
};

export class PositionsEffects implements OnInitEffects {
  ngrxOnInitEffects(): Action {
    return positionsReceived({ positions: initialPositions });
  }
}
