import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor(public http: HttpClient) { }
  obtenerDatos(){
    var api_url = "/search/resources/store/10151/categoryview/@top?responseFormat=json&catalogId=10051&depthAndLimit=-1,-1";
    return new Promise(resolve=>{
      this.http.get(api_url).subscribe(data=>{
        resolve(data);
      },error =>{
        console.log(error);
      })
    })
  }
}
