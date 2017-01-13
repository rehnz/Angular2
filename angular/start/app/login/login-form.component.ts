import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
import { LoginFormValidators } from './login-form.validators';

@Component({
  selector: 'login-form',
  templateUrl: 'app/login/login-form.html'
  
})
export class LoginFormComponent
 {
   userName: string;
   userPassword: string;

   loginForm = new FormGroup(
          {userName: new FormControl('', Validators.required,LoginFormValidators.isUnique),
           userPassword: new FormControl('',Validators.required)})
   
  //   constructor (fb: FormBuilder)
  //  {
  //    fb.group({
  //      userName:['',Validators.required],
  //      userPassword:['',Validators.required]
  //    })
  //  }

   signIn(){
     console.log(this.loginForm.value);
      console.log('Username is ' + this.userName + 'and password is ' + this.userPassword);
   }
   
 }
