import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  addForm:FormGroup
  submitted = false;
  successMsg:String=""
  companyDetail:String=""
  company:Company={
    companyCode:'',
    companyCEO:'',
    companyTurnover:0,
    companyWebsite:'',
    companyname:'',
    stockExchange:''
  }
  constructor(private companyService:CompanyService,private router:Router) { 
    this.addForm=new FormGroup({
      "ccode":new FormControl("",[Validators.required]),
      "cname":new FormControl("",[Validators.required]),
      "cceo":new FormControl("",[Validators.required]),
      "cturn":new FormControl("",[Validators.required]),
      "cweb":new FormControl("",[Validators.required]),
      "stock":new FormControl("",[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  registerCompany(){
    console.log(this.addForm.value)
    this.companyDetail=this.addForm.value
    var obj=JSON.parse(JSON.stringify(this.companyDetail))
    //this.company.companyCode=obj.ccode
    let company=new Company(obj.ccode,obj.cname,obj.cceo,obj.cweb,obj.stock,obj.cturn)
    console.log("company "+JSON.stringify(company))
    this.companyService.register(company).subscribe((res:any)=>{    
      this.successMsg="Company registered successfully !!"
      console.log(res)});
      
  }

  reset(){
    this.addForm.reset
  }

  goToPage(){
    this.router.navigate(['/company-list'])
  }
}
