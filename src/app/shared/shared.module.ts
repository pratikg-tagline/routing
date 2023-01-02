import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

import { ServiceComponent } from './service/service.component';
//import { TechnologyComponent } from '../features/technology/technology.component';
import { HomeComponent } from '../features/user/home/home.component';
import { TechnologyComponent } from './technology/technology.component';


@NgModule({
  declarations: [
    NavbarComponent,
    ServiceComponent,
    TechnologyComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[NavbarComponent]
})
export class SharedModule { }
