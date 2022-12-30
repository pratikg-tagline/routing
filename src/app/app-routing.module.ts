import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ServiceComponent } from './features/service/service.component';
import { TechnologyComponent } from './features/technology/technology.component';

const routes: Routes = [
  { path: '', component: ServiceComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'technology', component: TechnologyComponent },
  {
    path: 'user',
    loadChildren: () =>
      import('./features/user/user.module').then((m) => m.UserModule),
  },
  //  { path:'**',
  //    redirectTo:'navbar'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
