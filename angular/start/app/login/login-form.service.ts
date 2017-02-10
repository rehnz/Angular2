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
        let usersJSON = res.json();
        
        if (usersJSON['username'] == null || usersJSON['email'] == null)
            return null;

        let userSession = <User> {
       
        id : usersJSON["id"],
        username : usersJSON["username"],
        password : usersJSON["password"],
        fname : usersJSON["fname"],
        lname : usersJSON["lname"],
        email : usersJSON["email"],
        }
        return userSession;
    }
    
    private setCurrentSession(user:User)
    {
      console.log(user);
    }
}