import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-data',
  templateUrl: './stock-data.component.html',
  styleUrls: ['./stock-data.component.css']
})
export class StockDataComponent implements OnInit {

  stockForm:FormGroup;
  fromDate:String=""
  toDate:String=""
  
  constructor(public datePipe:DatePipe,
    private stockService:StockService) {
    this.stockForm=new FormGroup({
      "code":new FormControl("",[Validators.required])
    })
    
   }

  ngOnInit(): void {
  }

  getStock(code:any,from:any,to:any){
  this.fromDate=from
  this.toDate=to
  console.log(this.fromDate+" "+this.toDate)
  this.stockService.getStock(code,from,to).subscribe((res:any)=>{    
    console.log(res)});
  }

}
