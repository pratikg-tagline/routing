import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
// import { MainpartComponent } from './mainpart/mainpart.component';
import { ServiceComponent } from '../features/service/service.component';
import { TechnologyComponent } from '../features/technology/technology.component';


@NgModule({
  declarations: [
    NavbarComponent,
    ServiceComponent,
    TechnologyComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[NavbarComponent,ServiceComponent]
})
export class SharedModule { }
