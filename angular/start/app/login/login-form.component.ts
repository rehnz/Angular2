import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
import { LoginFormValidators } from './login-form.validators';
import { Observable } from 'rxjs/rx';
import { LoginFormService } from './login-form.service';

@Component({
  selector: 'login-form',
  templateUrl: 'app/login/login-form.html' 
})
export class LoginFormComponent
 {
   constructor (private _loginFormService : LoginFormService)
   {
    
   }
     //userName: string;
     //userPassword: string;

      loginForm = new FormGroup(
              {userName: new FormControl('', Validators.required),
              userPassword: new FormControl('',Validators.required)})
  
    signIn()
    {
      console.log(this.loginForm.value);
    { 
 }
   
   

