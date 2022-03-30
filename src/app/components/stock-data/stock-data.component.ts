import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Stock } from 'src/app/models/stock';
import { Stockprice } from 'src/app/models/stockprice';
import { CompanyService } from 'src/app/services/company.service';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-data',
  templateUrl: './stock-data.component.html',
  styleUrls: ['./stock-data.component.css']
})
export class StockDataComponent implements OnInit {

  stockForm:FormGroup;
  fromDate:any
  toDate:any
  namesList:any
  nameSelected:any;
  companyCode:any;
  stockObj:Stockprice[]=[]
  successMsg:String=""
  stockData:any
  stock:Stock[]=[]
  avgStock:String=""
  maxStock:String=""
  minStock:String=""
  
  constructor(public datePipe:DatePipe,
    private stockService:StockService,
    private companyService:CompanyService) {
    this.stockForm=new FormGroup({
      "code":new FormControl("",[Validators.required])
    })
   }

  ngOnInit() {
    this.getCompany();
  }

  getStock(from:any,to:any){
  this.fromDate=this.datePipe.transform(from, 'yyyy-MM-ddThh:mm');
  this.toDate=this.datePipe.transform(to, 'yyyy-MM-ddThh:mm');
  console.log(this.fromDate+" "+this.toDate)
  console.log("selected value "+this.selected())
  this.companyService.getCompanyNames().subscribe(data =>{this.namesList=data});   
  console.log("**************"+JSON.stringify(this.namesList))
  var obj=JSON.parse(JSON.stringify(this.namesList))
  Object.keys(this.namesList).forEach(prop => {
    if(prop==this.selected()){
      this.companyCode=this.namesList[prop]
    console.log("code value-"+this.companyCode);
    }
  });

  this.stockService.getStock(this.companyCode,this.fromDate,this.toDate).subscribe((res:any)=>{    
  this.stockObj=res
  localStorage.setItem('data',JSON.stringify(this.stockObj))
  this.successMsg="Stock Details fetched!!"});
  this.stockData=localStorage.getItem('data')
  console.log("from localstorage"+this.stockData)
  this.stock=JSON.parse(this.stockData).stock
  this.avgStock=JSON.parse(this.stockData).avgStock
  this.maxStock=JSON.parse(this.stockData).maxStock
  this.minStock=JSON.parse(this.stockData).minStock
  console.log(this.stock)
  }

 
  getCompany(){
    this.companyService.getCompanyNames().subscribe((res:any)=>{         
      this.namesList=res
    });      
  }

  selected(): string{
    return this.nameSelected
  }
}
