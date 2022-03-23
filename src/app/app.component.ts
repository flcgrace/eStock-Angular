import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShowCompanyComponent } from './components/show-company/show-company.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular8-estock-app';

  // constructor(private router:Router,private show:ShowCompanyComponent){}
  // goTo(code:string){
  //   localStorage.setItem('code',code)
  //   this.show.findCompany();
  //   // this.router.navigate(['/show-company'])
  // }
}
