import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'payroll', pathMatch: 'full' },
  {
    path: 'hr',
    loadChildren: () =>
      import('./hr-files/hr.module').then(m => m.HrModule)
  },
  {
    path: 'payroll',
    loadChildren: () =>
      import('./payroll/payroll.module').then(m => m.PayrollModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
