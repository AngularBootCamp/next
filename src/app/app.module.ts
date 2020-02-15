import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './login';

@NgModule({
  declarations: [LoginComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [LoginComponent]
})
export class AppModule {}
