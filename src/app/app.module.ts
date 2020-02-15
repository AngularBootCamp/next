import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterDisplayComponent } from './counter-display.component';
import { ROOT_REDUCERS } from './reducers';
import { AppState } from './state';

@NgModule({
  declarations: [AppComponent, CounterDisplayComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot<AppState>(ROOT_REDUCERS)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
