import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  CheckmarkPipe,
  ContainsXPipe,
  FieldRangePipe,
  ToCapsPipe
} from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    ToCapsPipe,
    ContainsXPipe,
    CheckmarkPipe,
    FieldRangePipe
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
