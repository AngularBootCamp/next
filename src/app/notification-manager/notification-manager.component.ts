import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, ackAll } from '../state';

@Component({
  selector: 'notification-manager',
  templateUrl: './notification-manager.component.html'
})
export class NotificationManagerComponent {
  constructor(private store: Store<AppState>) {}

  ackAll() {
    this.store.dispatch(ackAll());
  }
}
