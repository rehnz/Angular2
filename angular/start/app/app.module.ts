import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login/login-form.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule],
  declarations: [ AppComponent, NavbarComponent,HeaderComponent,LoginFormComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }