import { Injectable } from '@angular/core';
import { url_base } from '../config/config';
import { User } from '../models/user.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public url = url_base + 'user/';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * para realizar un login
   *
   * @param {User} user
   * @returns {Observable<any>}
   * @memberof UsuarioService
   */
  public logIn( user: User ): Observable<any> {

    return this.http.get(this.url +'login?email=' + user.name + '&password=' + user.password );
  }

  public createUser( user: User): Observable<any>  {

    return this.http.post( this.url + 'create', user );
  }
}
