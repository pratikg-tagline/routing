import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestGuard } from './features/login/auth/test.guard';
import { LoginPageComponent } from './features/login/login-page/login-page.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { ServiceComponent } from './shared/service/service.component';
import { TechnologyComponent } from './shared/technology/technology.component';
//import { TechnologyComponent } from './features/technology/technology.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'services',
    component: ServiceComponent,
    canActivate: [TestGuard],
  },
  {
    path: 'technology',
    component: TechnologyComponent,
    canActivate: [TestGuard],
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./features/user/user.module').then((m) => m.UserModule),
    canActivate: [TestGuard],
  },
  {
    path: 'view',
    loadChildren: () =>
      import('./features/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [TestGuard],
  },
  // {
  //   path: '**',
  //   redirectTo: 'navbar',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
