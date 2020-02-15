import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { PayrollSearchComponent } from './payroll-search.component';

@NgModule({
  declarations: [PayrollSearchComponent],
  exports: [PayrollSearchComponent],
  imports: [SharedModule, CommonModule]
})
export class PayrollModule {}
