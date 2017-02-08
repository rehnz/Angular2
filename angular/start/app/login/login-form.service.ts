import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable'

import { User } from '../classes/user'

@Injectable()
export class LoginFormService
{

  private usersAPI = "https://http://localhost:50248/api/Users";
  constructor(private _http : Http)
  {
     
  }

  getUsers() : Observable<User[]>
  {
      return this._http.get(this.usersAPI)
      .map(response => response.json());
      
  }
}