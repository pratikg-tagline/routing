import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ServiceComponent } from './shared/service/service.component';
import { TechnologyComponent } from './shared/technology/technology.component';
//import { TechnologyComponent } from './features/technology/technology.component';

const routes: Routes = [
  // { path: '', component: NavbarComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'technology', component: TechnologyComponent },
  {
    path: 'user',
    loadChildren: () =>
      import('./features/user/user.module').then((m) => m.UserModule),
  },
  {
    path:'view',
    loadChildren: () =>
      import('./features/admin/admin.module').then((m) => m.AdminModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
