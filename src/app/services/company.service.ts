import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private host = 'http://localhost:8081/company';
  
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.host+"/getall");
  }

  deleteCompany(code:any){

  }
}
