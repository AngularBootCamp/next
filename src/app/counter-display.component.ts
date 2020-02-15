import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'counter-display',
  templateUrl: './counter-display.component.html'
})
export class CounterDisplayComponent {
  @Input() label = '';
  @Input() counter = 0;
  @Output() pick = new EventEmitter<number>();
}
