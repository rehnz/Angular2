import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/rx';

@Injectable()
export class LoginFormService
{
  private _url = "https://jsonplaceholder.typicode.com/users";
  constructor(private _http : Http)
  {
     
  }

  getUsers()
  {
     return this._http.get(this._url)
      .map(result => result.json())
  }
}