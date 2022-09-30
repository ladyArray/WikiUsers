import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SignupComponent } from './components/signup/signup.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '', title: 'WikiUsers - homepage', component: HomeComponent },
  {
    path: 'login',
    title: 'WikiUsers - Iniciar Sesion',
    component: LoginComponent,
  },
  {
    path: 'logout',
    title: 'WikiUsers - Cerrar Sesion',
    component: LogoutComponent,
  },
  { path: 'users', title: 'WikiUsers - Usuarios', component: UsersComponent },
  {
    path: 'signup',
    title: 'WikiUsers - Registrarse',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
