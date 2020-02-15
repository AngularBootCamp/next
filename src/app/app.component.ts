import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  n = 0;
  food = 'apple';

  increment(_event: MouseEvent) {
    this.n++;
  }

  results() {
    if (this.n > 1 && this.n < 5) {
      return this.n;
    }
    return undefined;
  }
}
