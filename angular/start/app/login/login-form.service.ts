import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable'

import { User } from '../classes/user'

@Injectable()
export class LoginFormService
{

  private usersURL = "https://jsonplaceholder.typicode.com/users";
  constructor(private _http : Http)
  {
     
  }

  getUsers() : Observable<User[]>
  {
      return this._http.get(this.usersURL)
      .map(response => response.json());
      
  }
}