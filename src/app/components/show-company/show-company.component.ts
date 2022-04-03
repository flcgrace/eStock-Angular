import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { CompanyExtended } from 'src/app/models/company-extended';
import { ApiGatewayService } from 'src/app/services/api-gateway.service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-show-company',
  templateUrl: './show-company.component.html',
  styleUrls: ['./show-company.component.css']
})
export class ShowCompanyComponent implements OnInit {

  searchForm:FormGroup;
  successmsg:string="";
  company: Company={
    companyCode:"",
     companyname:"",
     companyCEO:"" ,
     companyWebsite:"" ,
     stockExchange:"",
     companyTurnover:0
  }
  companyObj:CompanyExtended[]=[]
  latestStockPrice:string=""

  constructor(private companyService:CompanyService,
    private router:Router) { 
    this.searchForm=new FormGroup({
      companycode:new FormControl("",[Validators.required])
    })
  }

  ngOnInit()  {
    localStorage.clear()
  }

  findCompany(code:any){
  this.companyService.findCompany(code).subscribe((res:any)=>{
    this.companyObj=res
    this.company=JSON.parse(JSON.stringify(this.companyObj)).company
    this.latestStockPrice=JSON.parse(JSON.stringify(this.companyObj)).latestStock
    console.log(this.company)
    localStorage.setItem('company',JSON.stringify(this.companyObj))
    this.successmsg="found company!"
  },
  (err) => {
    console.log(err.message);   
});
  // disp(){
  //   console.log("from display")
  //   this.result=localStorage.getItem('company');
  //   console.log(this.result)
  //   this.company=JSON.parse(this.result).company
  //   this.latestStockPrice=JSON.parse(this.result).latestStock
  //   console.log(this.latestStockPrice)
  // }
}

}
