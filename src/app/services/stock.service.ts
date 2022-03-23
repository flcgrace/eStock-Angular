import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private host = 'http://localhost:8082/stock';
  url:string=""

  constructor(private http: HttpClient) { }

  getStock(code:String,from:String,to:String){
    return this.http.get(this.host+"/get/"+code+"/"+from+"T06:07:22.2695666/"+to+"T07:07:22.2695666");
  }

  addStock(){

  }
}
