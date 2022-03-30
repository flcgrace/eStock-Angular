import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShowCompanyComponent } from './components/show-company/show-company.component';
import { Company } from './models/company';
import { CompanyExtended } from './models/company-extended';
import { CompanyService } from './services/company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular8-estock-app';
  company: CompanyExtended[]=[];

  constructor(
    private router:Router,
    private show:ShowCompanyComponent,
    private companyService:CompanyService){}

   goTo(code:string){
     this.companyService.findCompany(code).subscribe((res:any)=>{
      this.company=res
      this.show.findCompany(this.company)
      });
     
    //  localStorage.setItem('code',code)
    //  this.show.findCompany();
    //  this.router.navigate(['/show-company'])
   }
}
