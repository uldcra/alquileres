import { Component, OnInit  } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public itemsMenu: any[] = [];

  /* 
    Home
    Poner anuncio
    Mis favoritos
    Mis anuncios
    Blog
    Login
    Listado de anuncios
    Nuevo Blog
  */

  constructor(
    private UsuarioService: UsuarioService
  ) { }
 

  ngOnInit() {
    
   this.comprobarLogin();
  }

  menuSimple() {
    this.itemsMenu = [ 
      {label: 'Home' , ruta: 'home'},
      {label: 'Blog' , ruta: 'blog'},
      {label: 'Login' , ruta: 'login'}
    ];
    console.log('menu,user',  this.itemsMenu);
  }
/**
 *
 * Comprobar login
 * @memberof NavbarComponent
 */

comprobarLogin() {
  //this.rellenarMenu();
  this.UsuarioService.logueado.subscribe( resp => {
    //console.log('Observable login ', resp );
    
    if ( resp == 0 ) {
      this.rellenarMenu();
    } else {
      this.rellenarMenu();
    }
  });
     
  }
/**
 * Rellenar Menu
 */
  rellenarMenu() {
 /* this.menuAdmin(); */
    if ( localStorage.getItem('role') != null ) {
      if (localStorage.getItem('role').localeCompare('ROLE_ADMIN') == 0) {
        this.menuAdmin();
      } else {
        this.menuUser();
      }
     } else {
       this.menuSimple();
     }
  }

  menuAdmin() {
    this.itemsMenu = [ 
      {label: 'Home' , ruta: 'home'},
      {label: 'Blog' , ruta: 'blog'},
      {label: 'Logout' , ruta: 'login'},
      {label: 'Listado de anuncios' , ruta: 'blog'},
      {label: 'Nuevo Blog' , ruta: 'blog'},
    ];
    console.log('menu,admin',  this.itemsMenu);
  }

  menuUser() {
    
    
    this.itemsMenu = [ 
      {label: 'Home' , ruta: 'home'},
      {label: 'Poner anuncio' , ruta: 'blog'},
      {label: 'Mis favoritos' , ruta: 'blog'},
      {label: 'Mis anuncios' , ruta: 'Mis anuncios'},
      {label: 'Blog' , ruta: 'blog'},
      {label: 'Logout' , ruta: 'login'
    },
      
    ];
    
  }

  logout() {
    //this.UsuarioService.logueado.next(0);
    localStorage.clear();
    
  }


}

