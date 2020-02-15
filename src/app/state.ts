import { createAction, createReducer, on, props } from '@ngrx/store';

export const pickBerry = createAction('PICK_BERRY');

export const pickApples = createAction(
  'PICK_APPLES',
  props<{ count: number }>()
);

export const emptyCart = createAction('EMPTY_CART');

export interface AppState {
  berryCounter: number;
  appleCounter: number;
}

const initialState = 0;

export const berryCounterReducer = createReducer(
  initialState,
  on(pickBerry, state => state + 1),
  on(emptyCart, _state => 0)
);

export const appleCounterReducer = createReducer(
  initialState,
  on(pickApples, (state, action) => {
    // If you have too many apples, they spill and you lose them all.
    const y = state + action.count;
    return y > 10 ? 0 : y;
  }),
  on(emptyCart, _state => 0)
);
