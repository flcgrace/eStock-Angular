import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private host = 'http://localhost:8081/company';
  url:string=""
  
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.host+"/getall");
  }

  deleteCompany(code:any){
    return this.http.delete(this.host+"/delete/"+code);
  }

  getCompanyNames(){
    return this.http.get(this.host+"/getall/companynames");
  }

  findCompany(code:any){
    this.url=this.host+"/info/"+code
    console.log("url is "+this.url)
    return this.http.get(this.host+"/info/"+code)
  }

  register(company:Company){
    const headers={'content-type':'application/json'}
    return this.http.post(this.host+"/register/",company)
  }
}
