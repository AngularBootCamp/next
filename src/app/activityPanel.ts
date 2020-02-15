// This component lets the user turn the activity stream on and off.
// It is off by default, so that the software does not generate a long
// stream of activity in Firebase merely from being reloaded.

import { Component, OnDestroy } from '@angular/core';

import { Generator } from './activityGenerator';

@Component({
  selector: 'activity-generator',
  templateUrl: './activityPanel.html'
})
export class ActivityPanelComponent implements OnDestroy {
  n = 0;
  handle: number;
  enabled = false;

  constructor(g: Generator) {
    this.handle = window.setInterval(() => {
      if (this.enabled) {
        // void tells tslint that we are intentionally ignoring a promise.
        void g.next();
        this.n++;
      }
    }, 100);
  }

  ngOnDestroy() {
    clearInterval(this.handle);
  }
}
