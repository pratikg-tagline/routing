import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
{path:'data',
component:ViewComponent
},
{
  path:'data/:id',
component:ViewDetailComponent
},


{path:'**',
redirectTo:"data"
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
