import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { HrFilesSearchComponent } from './hr-files-search.component';

@NgModule({
  declarations: [HrFilesSearchComponent],
  exports: [HrFilesSearchComponent], // export COMPONENTS, directives, pipes
  imports: [SharedModule, CommonModule] // import MODULES
})
export class HrModule {}
