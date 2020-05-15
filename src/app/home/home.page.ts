import { Component } from '@angular/core';
import { ProvidersService } from '../providers.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  datos;
  constructor(public proveedor :ProvidersService ) {
    this.ionViewDidLoad();
  }

  ionViewDidLoad(){
    this.proveedor.obtenerDatos().then(data=>{
      this.datos=data;
      console.log(this.datos);
    }).catch(data=>{
      console.log(data);
    })
  }
}
