import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiGatewayService {

  private companyHost = "http://localhost:9091/company-service/company/"
  private stockHost = "http://localhost:9091/stock-service/stock/"
  constructor(private http: HttpClient) { }

  getCompanies(){
    return this.http.get(this.companyHost+"/getall");
  }
}
