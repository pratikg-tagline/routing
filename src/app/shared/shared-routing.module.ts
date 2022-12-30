import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServiceComponent } from './service/service.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  { path:'services',
 component:ServiceComponent
},
{ path:'technology',
component:TechnologyComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
