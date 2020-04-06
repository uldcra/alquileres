import { Injectable } from '@angular/core';
import { url_base } from '../config/config';
import { User } from '../models/user.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public url = url_base + 'user/';
  public logueado : BehaviorSubject <number> = new BehaviorSubject<number>(0);

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

 /*  public loginCorrecto(numero: number) {
    console.log('numero', numero);
    this.logueado.next(numero);
  }
 */
public getUSer(id): Observable<any> {

  return this.http.get(this.url + 'listar/' + id );
}

  public createUser( user: User): Observable<any>  {

    return this.http.post( this.url + 'create', user );
  }

  addFovrites(id, id_advfo){
    return this.http.get(this.url + 'addfavo?id=' + id + '&id_advfo=' + id_advfo);
    
  }
  removeFavorites(id, id_advfo){
    return this.http.get(this.url + 'removeFavo?id=' + id + '&id_advfo=' + id_advfo);

  }

}
