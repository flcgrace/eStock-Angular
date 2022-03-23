import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companyList:Company[]=[];
  successMessage:any;

  constructor(private companyService:CompanyService,
    private router:Router) { }

  ngOnInit(){
    this.fetchAllCompanies();
  }
  fetchAllCompanies(){
    this.companyService.getAll().subscribe((res:any)=>{this.companyList=res});
  }
  deleteCompany(code:string){
    console.log(code);
    this.companyService.deleteCompany(code).subscribe((res:any)=>{
      this.successMessage="Company SuccessFully"
    });
  }

}
