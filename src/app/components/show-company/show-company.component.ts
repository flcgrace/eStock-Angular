import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-show-company',
  templateUrl: './show-company.component.html',
  styleUrls: ['./show-company.component.css']
})
export class ShowCompanyComponent implements OnInit {

  search:FormGroup;
  viewIsTrue:boolean=false;
  compCode:string="";
  value:string="";
  constructor() { 
    this.search=new FormGroup({
      "code":new FormControl("",[Validators.required])
    })
  }

  ngOnInit()  {
  }

  findCompany(){
 //alert("button is clicked")
  this.compCode=this.value;
  console.log(this.compCode)
  //call findcompanycode api
  }
}
