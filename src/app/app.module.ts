import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DefaultStrategyComponent } from './display/default-strategy.component';
import { ItemDetailComponent } from './display/item-detail.component';
import { OnPushStrategyComponent } from './display/onpush-strategy.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultStrategyComponent,
    OnPushStrategyComponent,
    ItemDetailComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
