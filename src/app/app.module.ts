import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './components/login/login.module';
import { RegisterModule } from './components/register/register.module';
import { HomeModule } from './components/home/home.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
    HomeModule,
    NavbarModule,
    HttpClientModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
