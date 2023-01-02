import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ViewComponent } from './view/view.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';


@NgModule({
  declarations: [
    ViewComponent,
    ViewDetailComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
 exports:[ViewComponent,ViewDetailComponent]
})
export class AdminModule { }
