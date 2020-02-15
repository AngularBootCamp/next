import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppEffects } from './app.effects';
import { EmployeesEffects } from './employees.effects';
import { EmployeeListComponent } from './notification-manager/employee-list/employee-list.component';
import { NotificationManagerComponent } from './notification-manager/notification-manager.component';
import { PositionListComponent } from './notification-manager/position-list/position-list.component';
import { PositionsEffects } from './positions.effects';
import { ROOT_REDUCERS } from './reducers';
import { SharedModule } from './shared-module/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NotificationManagerComponent,
    EmployeeListComponent,
    PositionListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictStateSerializability: true,
        strictActionImmutability: true,
        strictActionSerializability: true
      }
    }),
    EffectsModule.forRoot([
      AppEffects,
      EmployeesEffects,
      PositionsEffects
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
