import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
import { LoginFormValidators } from './login-form.validators';
import { Observable } from 'rxjs/rx';
import { LoginFormService } from './login-form.service';

import { User } from '../classes/user'

@Component({
  selector: 'login-form',
  templateUrl: 'app/login/login-form.html' ,
  providers: [LoginFormService]
})
export class LoginFormComponent
{
    public allUsers;
    constructor (private _loginFormService : LoginFormService)
    {
      
    }
      
      loginForm = new FormGroup({
        userName: new FormControl('', Validators.required),
        userPassword: new FormControl('',Validators.required)
      });

      signIn()
      {
        this.allUsers = this._loginFormService.getUsers()
          .subscribe(users => console.log(users));
          console.log(this.loginForm.value);
      }              
        
            
        
    
 }
   
   

