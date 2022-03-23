import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { ShowCompanyComponent } from './components/show-company/show-company.component';
import { StockDataComponent } from './components/stock-data/stock-data.component';
import { AddStockComponent } from './components/add-stock/add-stock.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCompanyComponent,
    CompanyListComponent,
    ShowCompanyComponent,
    StockDataComponent,
    AddStockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [DatePipe,ShowCompanyComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
