import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { ShowCompanyComponent } from './components/show-company/show-company.component';
import { StockDataComponent } from './components/stock-data/stock-data.component';

export const routes:Routes=[
  {path:"add-company", component:AddCompanyComponent},
  {path:"company-list", component:CompanyListComponent},
  {path:"show-company", component:ShowCompanyComponent},
  {path:"stock-data", component:StockDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
