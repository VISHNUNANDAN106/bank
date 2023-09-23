import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../bankservice/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 data="Happy banking with us ,"
 data2="Enter account number"
 data3="Enter password"
//  acno:any
//  psw:any
 //model form
 loginForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
 })
 constructor(private rout:Router,private fb:FormBuilder,private ds:DataService) { }
 login(){

  var acno=this.loginForm.value.acno
  var psw=this.loginForm.value.psw

  if(this.loginForm.valid){
this.ds.loginApi(acno,psw).subscribe({

  next:(result:any)=>{
    //console log(result);
    //store acno in localstorage
localStorage.setItem("currentAcno",JSON.stringify(acno))
localStorage.setItem("currentUname",result.currentUser)
localStorage.setItem("token",JSON.stringify(result.token))

  alert(result.message)
  this.rout.navigateByUrl("home")

  },
  error:(result:any)=>{
  //console log(result);
  alert(result.error.message)
  }
})
  }
  else{
    alert("invalid form")
  }
//  console.log(this.acno);
//  console.log(this.psw);
// alert(this.acno)
// redirection
// this.rout.navigateByUrl("home")

 }
//  acnoChange(event:any){
//   console.log(event.target.value);
  
//  }
//  paassChange(event:any){
//   console.log(event.target.value);
  
//  }

}
