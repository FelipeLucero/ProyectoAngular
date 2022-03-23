import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { FormularioingresoComponent } from './components/formularioingreso/formularioingreso.component';
import { FormsModule } from '@angular/forms';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TablalibroComponent } from './components/tablalibro/tablalibro.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ContactoComponent,
    Pagina404Component,
    FormularioingresoComponent,
    LoginComponent,
    ProfileComponent,
    TablalibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AlifeFileToBase64Module,
    AuthModule.forRoot(environment.auth0)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
