import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ManagerComponent } from './manager.component';
import { WorkerComponent } from './worker.component';

@NgModule({
  declarations: [AppComponent, ManagerComponent, WorkerComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
