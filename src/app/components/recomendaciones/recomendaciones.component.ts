import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {

  @Input() items:any;

  constructor(
    private UsuarioService: UsuarioService
  ) { }

  ngOnInit() {
  }

  agregarFavoritos(id_favo: number ) {
    console.log('id_favo: ', id_favo );
    let id_user = localStorage.getItem('id');
    this.UsuarioService.addFovrites(id_user,id_favo).toPromise()
    .then( resp => {
      console.log('todo ha ido bien', resp);
      
    })
    .then( () => {})
    .catch( error => {
      console.log('error: ', error);
      
    });
    
  }

}
