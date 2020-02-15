import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  AckPositionAction,
  getCurrentPositions,
  getNewPositions
} from '../../positions.state';
import { AppState } from '../../state';

@Component({
  selector: 'position-list',
  templateUrl: './position-list.component.html'
})
export class PositionListComponent {
  curPositions: Observable<string[]>;
  newPositions: Observable<string[]>;

  constructor(private store: Store<AppState>) {
    this.curPositions = store.pipe(select(getCurrentPositions));
    this.newPositions = store.pipe(select(getNewPositions));
  }

  ackPos(position: string) {
    this.store.dispatch(new AckPositionAction(position));
  }
}
