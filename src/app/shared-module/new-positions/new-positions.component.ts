import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'new-positions',
  templateUrl: './new-positions.component.html'
})
export class NewPositionsComponent {
  @Input() newPosList: string[] = [];
  @Output() ackPositions = new EventEmitter<string>();

  ack(position: string) {
    this.ackPositions.emit(position);
  }
}
