import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./user-dashboard/user-dashboard.module').then(
        m => m.UserDashboardModule
      )
  },
  {
    path: 'employees',
    loadChildren: () =>
      import('./employee-browser/employee-browser.module').then(
        m => m.EmployeeBrowserModule
      )
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
