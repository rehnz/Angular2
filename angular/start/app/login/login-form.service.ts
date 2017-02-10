import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { User } from '../classes/user'

@Injectable()
export class LoginFormService
{
  private defaultUsersAPI = "http://localhost:50248/api/Users";
  public userSession : User;
  constructor(private _http : Http)
  {

  }

  public validateUser(userName:string,userPassword:string) : Observable<User>
  {

      return this._http.get(this.defaultUsersAPI + '?userName=' + userName + '&userPassword=' + userPassword)
      .map(this.buildUserSession)
        //  .do(session => this.setCurrentSession(session))
            .catch( response  => Observable.throw(response.json().error || 'Login failure'))      
  }
  private buildUserSession(res:Response):User {
        this.userSession = res.json();
        return this.userSession;
        
    }
    
    private setCurrentSession(user:User)
    {
      console.log(user);
    }
}