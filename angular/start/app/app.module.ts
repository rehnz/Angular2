import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login/login-form.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'about', component: AboutComponent }]

@NgModule({
  imports:      [ BrowserModule,FormsModule,ReactiveFormsModule,HttpModule,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, NavbarComponent,HeaderComponent,LoginFormComponent,AboutComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }