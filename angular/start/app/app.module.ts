import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login/login-form.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule,ReactiveFormsModule,HttpModule],
  declarations: [ AppComponent, NavbarComponent,HeaderComponent,LoginFormComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }