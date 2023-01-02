import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './features/admin/admin.module';
import { UserModule } from './features/user/user.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
//import { ServiceComponent } from './features/service/service.component';

@NgModule({
  declarations: [
    AppComponent,
   // ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UserModule,
    AdminModule
  ],
  exports:[SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
