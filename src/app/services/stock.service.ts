import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private host = 'http://localhost:8082/stock';
  url:string=""

  constructor(private http: HttpClient) { }

  getStock(code:String,from:String,to:String){
    console.log("URL-->"+this.host+"/get/"+code+"/"+from+"/"+to)
    return this.http.get(this.host+"/get/"+code+"/"+from+"/"+to);
  }

  addStock(stock:Stock){
    return this.http.post(this.host+"/add/",stock)
  }
}
