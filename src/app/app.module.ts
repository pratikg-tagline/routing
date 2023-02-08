import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './features/login/login.module';
import { LoginservicesService } from './features/login/services/loginservices.service';
import { UserModule } from './features/user/user.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';


//import { ServiceComponent } from './features/service/service.component';

@NgModule({
    declarations: [
        AppComponent,
       
        // ServiceComponent
    ],
    exports: [SharedModule],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        UserModule,
        LoginModule,
        ReactiveFormsModule,
        FormsModule,
    ]
})
export class AppModule { }
