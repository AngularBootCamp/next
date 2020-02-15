import {
  Directive,
  HostBinding,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[blink]'
})
export class BlinkDirective implements OnDestroy, OnInit {
  @HostBinding('style.visibility') viz = 'visible';
  @Input() set speed(rawSpeed: number | string) {
    this.stop();
    this.start(Number(rawSpeed) || 500);
  }

  private intervalId?: number;

  ngOnInit() {
    if (!this.intervalId) {
      this.start(500);
    }
  }

  start(ms: number) {
    this.intervalId = window.setInterval(() => {
      this.viz = this.viz === 'visible' ? 'hidden' : 'visible';
    }, ms);
  }

  stop() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  ngOnDestroy() {
    this.stop();
  }
}

// The above code shows the direct, browser-centric way to do this.
// There are other ways, such as Observable.interval(), which
// binds to the browser less tightly and is much more composable.
