import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'do', pathMatch: 'full' },
  {
    path: 'do',
    loadChildren: () => import('./do/do.module').then(m => m.DoModule)
  },
  {
    path: 'dont',
    loadChildren: () =>
      import('./dont/dont.module').then(m => m.DontModule)
  }
];

const config: ExtraOptions = {
  useHash: true,
  enableTracing: false,
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
