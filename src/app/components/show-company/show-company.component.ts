import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { CompanyExtended } from 'src/app/models/company-extended';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-show-company',
  templateUrl: './show-company.component.html',
  styleUrls: ['./show-company.component.css']
})
export class ShowCompanyComponent implements OnInit {

  searchForm:FormGroup;
  viewIsTrue:boolean=false;
  companycode:string="";
  value:string="";
  company: CompanyExtended[]=[];

  constructor(private companyService:CompanyService,
    private router:Router) { 
    this.searchForm=new FormGroup({
      companycode:new FormControl("",[Validators.required])
    })
  }

  ngOnInit()  {
  }

  findCompany(comp:any){
    this.company=comp
  // this.companycode=this.searchForm.value
  // var obj=JSON.parse(JSON.stringify(this.companycode))
  // this.companyService.findCompany(localStorage.getItem('code')).subscribe((res:any)=>{
  // this.company=res
  
  console.log("this.company from showcomponent"+JSON.stringify(this.company));
  }
}
