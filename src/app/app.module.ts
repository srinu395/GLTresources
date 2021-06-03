import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { InformationdashboardComponent } from './informationdashboard/informationdashboard.component';
import { ProfileregistrationComponent } from './profileregistration/profileregistration.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    InformationdashboardComponent,
    ProfileregistrationComponent,
    ProfilesComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
