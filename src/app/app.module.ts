import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RedditSearchComponent } from './reddit-search/reddit-search.component';

@NgModule({
  declarations: [AppComponent, RedditSearchComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
