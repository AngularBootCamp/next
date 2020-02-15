import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SingleControlComponent } from './singleControl';

@NgModule({
  declarations: [SingleControlComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  bootstrap: [SingleControlComponent]
})
export class AppModule {}
