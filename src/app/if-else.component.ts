import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './if-else.component.html'
})
export class IfElseComponent {
  n = 0;

  increment() {
    this.n++;
  }
}
