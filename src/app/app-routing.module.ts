import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { InformationdashboardComponent } from './informationdashboard/informationdashboard.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ProfileregistrationComponent } from './profileregistration/profileregistration.component';
import { ProfilesComponent } from './profiles/profiles.component';

const routes: Routes = [
{path:'',component: InformationdashboardComponent},
{ path: 'informationdashboard', component: InformationdashboardComponent},
{ path: 'login', component: LoginComponent},
{ path: 'forgotpassword', component: ForgotpasswordComponent},
{ path: 'resetpassword', component: ResetpasswordComponent},
{ path: 'registration', component: RegistrationComponent},
{ path: 'profileregistration', component: ProfileregistrationComponent},
{ path: 'profiles', component: ProfilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
