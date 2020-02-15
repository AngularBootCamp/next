import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { PayrollSearchComponent } from './payroll-search.component';

const payrollRoutes: Routes = [
  { path: '', component: PayrollSearchComponent }
];

@NgModule({
  declarations: [PayrollSearchComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(payrollRoutes)
  ]
})
export class PayrollModule {}
