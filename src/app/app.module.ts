import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './notification-manager/employee-list/employee-list.component';
import { NotificationManagerComponent } from './notification-manager/notification-manager.component';
import { PositionListComponent } from './notification-manager/position-list/position-list.component';
import { ROOT_REDUCERS } from './reducers';
import { SharedModule } from './shared-module/shared.module';
import { AppState } from './state';

@NgModule({
  declarations: [
    AppComponent,
    NotificationManagerComponent,
    EmployeeListComponent,
    PositionListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot<AppState>(ROOT_REDUCERS, {
      // Starting with NgRx 9 these will be turned on by default
      runtimeChecks: {
        strictStateImmutability: true,
        strictStateSerializability: true,
        strictActionImmutability: true,
        strictActionSerializability: true
      }
    }),
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
