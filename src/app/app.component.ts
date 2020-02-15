import { Component } from '@angular/core';

import { HelloService } from './hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  greeting = '';

  constructor(private hello: HelloService) {}

  calculateGreeting() {
    this.greeting = this.hello.calculateHello('Hello');
  }
}
