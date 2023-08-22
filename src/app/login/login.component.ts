import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 data="Happy banking with us ,"
 data2="Enter account number"
 acno:any
 psw:any
 constructor(private rout:Router) { }
 login(){
//  console.log(this.acno);
//  console.log(this.psw);
// alert(this.acno)
// redirection
this.rout.navigateByUrl("home")

 }
//  acnoChange(event:any){
//   console.log(event.target.value);
  
//  }
//  paassChange(event:any){
//   console.log(event.target.value);
  
//  }

}
