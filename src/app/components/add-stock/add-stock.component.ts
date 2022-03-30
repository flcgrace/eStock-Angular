import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Stock } from 'src/app/models/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  addStockForm:FormGroup
  submitted = false;
  successMsg:String=""
  stockData:String=""
  stock:Stock={
    companyCode:'',
    price:0,
    dateTime:""
  }

  constructor(private stockService:StockService) {
    this.addStockForm=new FormGroup({
      "ccode":new FormControl("",[Validators.required]),
      "sprice":new FormControl("",[Validators.required])
    })
   }

  ngOnInit() {
   // this.addStockPrice()
  }

  addStockPrice(){
    this.stockData=this.addStockForm.value
    var obj=JSON.parse(JSON.stringify(this.stockData))
    console.log(obj.ccode+" "+obj.sprice)
    let stock=new Stock(obj.ccode,obj.sprice,"")
    this.stockService.addStock(stock).subscribe((res:any)=>{    
      this.successMsg="Stock successfully added to company !!"
      console.log(res)});
    this.reset();
  }
  reset(){
    this.addStockForm.reset
  }
}
