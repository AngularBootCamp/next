import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Subscription } from 'rxjs';

import { Worker, Workers } from './workers';

@Component({
  selector: 'worker-cmp',
  templateUrl: './worker.component.html'
})
export class WorkerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public label = '';
  @Input() public label2 = '';

  workerList: Worker[] = [];
  intervalVal = 0;

  private secondListSubscription: Subscription;
  private intervalHandle: number;

  constructor(workers: Workers) {
    console.log('constructor', this.label);

    this.secondListSubscription = workers
      .workerList()
      .subscribe(data => (this.workerList = data));

    this.intervalHandle = window.setInterval(() => {
      this.intervalVal += 1;
      console.log('intervalVal:', this.intervalVal);
    }, 1000);
  }

  ngOnInit() {
    console.log('ngOnInit', this.label);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('A change has occurred', changes);
    if (changes['label']) {
      console.log(changes['label'].currentValue);
    }
  }

  ngOnDestroy() {
    console.log('onDestroy called, cleaning up');
    this.secondListSubscription.unsubscribe();
    clearInterval(this.intervalHandle);
  }
}
