import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// BrowserModule includes a kit of "built in" browser-ready features.
// It avoids the need to import specific features: *ngIf, *ngFor

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
