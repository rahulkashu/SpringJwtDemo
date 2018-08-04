import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'

export const routes: Routes = [
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{path : 'login', component: HomeComponent},
{path : 'signUp', component: RegisterComponent},
{path : 'forgotPassword', component: ForgotPasswordComponent}
];
export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
