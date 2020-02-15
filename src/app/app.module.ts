import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ColorComponent } from './color';

@NgModule({
  declarations: [ColorComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [ColorComponent]
})
export class AppModule {}
