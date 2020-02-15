import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { HrFilesSearchComponent } from './hr-files-search.component';

const hrRoutes: Routes = [
  { path: '', component: HrFilesSearchComponent }
];

@NgModule({
  declarations: [HrFilesSearchComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(hrRoutes)
  ] // import MODULES
})
export class HrModule {}
