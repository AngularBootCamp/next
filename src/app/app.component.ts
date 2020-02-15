import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  stringWithHtml: string;
  htmlProperty: SafeHtml;

  constructor(sanitizer: DomSanitizer) {
    this.stringWithHtml = `
      <button onClick="console.log('hello from old-school HTML/JS');">
        Press Me
      </button>
      <em>Hello from <strong>HTML</strong></em>
    `;
    // TODO: Do our part to make sure HTML is safe
    this.htmlProperty = sanitizer.bypassSecurityTrustHtml(
      this.stringWithHtml
    );
  }
}
