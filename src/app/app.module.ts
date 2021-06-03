import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { InformationdashboardComponent } from './informationdashboard/informationdashboard.component';
import { ProfileregistrationComponent } from './profileregistration/profileregistration.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { LoginComponent } from './login/login.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    InformationdashboardComponent,
    ProfileregistrationComponent,
    ProfilesComponent,
    LoginComponent,
    ResetpasswordComponent,
    ForgotpasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
