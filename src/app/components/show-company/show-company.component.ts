import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
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
  company: Company[]=[];

  constructor(private companyService:CompanyService,
    private router:Router) { 
    this.searchForm=new FormGroup({
      companycode:new FormControl("",[Validators.required])
    })
  }

  ngOnInit()  {
  }

  findCompany(){
  this.companycode=this.searchForm.value
  var obj=JSON.parse(JSON.stringify(this.companycode))
  this.companyService.findCompany(obj.companycode).subscribe((res:any)=>{
  this.company=res
  console.log("this.company"+JSON.stringify(this.company))});
  }
}
