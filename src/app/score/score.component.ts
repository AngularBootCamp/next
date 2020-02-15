import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'show-score',
  templateUrl: './score.component.html'
})
export class ScoreComponent {
  @Input() value = 0;
  @Output() notify = new EventEmitter<string>();

  onNotify() {
    this.notify.emit('Your score was ' + this.value);
  }
}
