import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logueado: boolean = false;

  public loginForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private userService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.logueado.subscribe( resp => {
      if ( resp == 0) {
        this.logueado = false;
      } else {
        this.logueado = true;
      }
    })
  }

  
  onSubmit() {
    console.log('loginForm' , this.loginForm.value);
    this.userService.logIn( this.loginForm.value ).subscribe( (resp: User) => {
      console.log('respuesta', resp);
      if ( resp == null ) {
        console.log('No se ha encontrado usuario');
      } else {
          localStorage.setItem('name', resp.name);
          localStorage.setItem('email', resp.email);
         
         
      }
    });
    
    this.userService.logIn( this.loginForm.value ).toPromise()
    .then( (resp: User) => {
      console.log('respuesta', resp);
      if ( resp == null ) {
        console.log('No se ha encontrado usuario');
      } else {
          localStorage.setItem('name', resp.name);
          localStorage.setItem('email', resp.email);
          console.log('logueado');
          
          this.userService.logueado.next(1);
          this.router.navigate(['/home']);
         
      }
      
    });
    /* .then( () => {
      console.log('segunda respuesta' );
     
    })
    .catch( error => {
      console.warn('error', error);
    }); */
  }

  logOut() {
    localStorage.clear();
    this.userService.logueado.next(0);
    //this.router.navigate(['/home']);
  }

}
