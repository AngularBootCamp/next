import {
  Directive,
  HostBinding,
  Input,
  OnDestroy
} from '@angular/core';

@Directive({
  selector: '[bounce]'
})
export class BounceDirective implements OnDestroy {
  @HostBinding('style.transform') transform = '';
  @Input() public speed = 25;

  private intervalId: number;
  private n = 0;

  constructor() {
    this.intervalId = window.setInterval(() => {
      this.n = this.n + 0.1;
      const rotation = Math.sin(this.n) * 5;
      this.transform = `rotate(${rotation}deg)`;
    }, this.speed);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}

// As with Blink, this could be done at a greater abstraction
// from the browser interval settings.
