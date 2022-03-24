import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FormularioingresoComponent } from './components/formularioingreso/formularioingreso.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },

  {
    path:'home', redirectTo: ''
  },

  {
    path: 'ingresolibro', component: FormularioingresoComponent, canActivate: [AuthGuard]
  },
  {
    path:'login', component: LoginComponent,
  },
  {
    path:'profile', component: ProfileComponent, canActivate: [AuthGuard]
  },
  {
    path: 'contacto', component: ContactoComponent
  },

  {
    path: '404', component: Pagina404Component
  },

  {
    path: '**', redirectTo: '404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
