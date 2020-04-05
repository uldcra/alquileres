import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url_base } from '../config/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecomendacionesService {

  public url = url_base + 'advertisement/';

  constructor(
    private http: HttpClient
  ) { }

  listarAdvertisement(): Observable<any>{

    return this.http.get(this.url + 'listar');
    
  }

}
