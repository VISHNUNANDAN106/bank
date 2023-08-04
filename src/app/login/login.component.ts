import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 data="Happy banking with us ,"
 data2="Enter account number"
 login(){
  alert("login clicked")

 }
 acnoChange(event:any){
  console.log(event.target.value);
  
 }
 paassChange(event:any){
  console.log(event.target.value);
  
 }

}
