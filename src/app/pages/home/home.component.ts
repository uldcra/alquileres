import { Component, OnInit } from '@angular/core';
import { RecomendacionesService } from 'src/app/services/recomendaciones.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public price:any = '';
  public rooms:any = '';
  public bathrooms:any = '';
  public squareMeters:any = '';
  public property:any = '';
  public location:any = '';
  public type:any = '';
  public id:any = '';
  public key:any = '';
  public value:any = '';

  public items: any[] = [];

  constructor(
    private recomendacionesService: RecomendacionesService
  ) { }

  ngOnInit() {
    this.recomendacionesService.listarAdvertisement().toPromise()
    .then( resp => {
      console.log(resp);
      
      this.items = resp;
    })
  }



}
