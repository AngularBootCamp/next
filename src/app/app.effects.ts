import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map } from 'rxjs/operators';

import { ModalService } from './modal.service';
import { ackAll, ackAllSuccess } from './state';

@Injectable()
export class AppEffects {
  // To use effects we will always need the action stream injected; in
  // some cases it is also helpful to inject the Store itself, with a
  // parameter like:
  // private store: Store<AppState>
  constructor(
    private actions$: Actions,
    private modalSvc: ModalService
  ) {}

  // This confirmation step could have been added at dispatch
  // instead, but it's cleaner to keep as little business logic
  // in the component as possible. Note that the output is a
  // different type of action; this is necessary to avoid an
  // infinite loop.
  ackAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ackAll),
      filter(() => this.modalSvc.confirm('Are you sure?')),
      map(() => ackAllSuccess())
    )
  );
}
