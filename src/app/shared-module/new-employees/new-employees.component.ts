import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'new-employees',
  templateUrl: './new-employees.component.html'
})
export class NewEmployeesComponent {
  @Input() newEmpList: string[] = [];
  @Output() ackEmployee = new EventEmitter<string>();

  ack(employee: string) {
    this.ackEmployee.emit(employee);
  }
}
