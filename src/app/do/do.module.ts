import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared-module/shared.module';

import { DoComponent } from './do.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PositionListComponent } from './position-list/position-list.component';

const doRoutes: Routes = [{ path: '', component: DoComponent }];

@NgModule({
  declarations: [
    EmployeeListComponent,
    PositionListComponent,
    DoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(doRoutes),
    SharedModule
  ]
})
export class DoModule {}
