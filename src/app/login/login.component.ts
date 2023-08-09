import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 data="Happy banking with us ,"
 data2="Enter account number"
 login(a:any,b:any){
console.log(a.value);
console.log(b.value);


 }
//  acnoChange(event:any){
//   console.log(event.target.value);
  
//  }
//  paassChange(event:any){
//   console.log(event.target.value);
  
//  }

}
