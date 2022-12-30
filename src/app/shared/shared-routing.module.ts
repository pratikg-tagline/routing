import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { ServiceComponent } from './service/service.component';
import { TechnologyComponent } from '../features/technology/technology.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
