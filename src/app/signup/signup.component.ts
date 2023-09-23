import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../bankservice/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  pswCheck:any=false
  // model for signup form
  signupForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Zv ]+')]],
    cpsw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]

  })

  constructor(private rout:Router,private fb:FormBuilder,private ds:DataService) { }
  signup(){
    // alert("account created")
// console.log(this.signupForm.value.acno);

var path=this.signupForm.value
var acno=path.acno
var uname=path.uname
var psw=path.psw
var cpsw=path.cpsw
if(this.signupForm.valid){
if(psw==cpsw){
  this.pswCheck=false
//apicall
  this.ds.accountCreate(acno,psw,uname).subscribe({
    next:(result:any)=>{
      alert(result.message)
      this.rout.navigateByUrl("")
    },
    error:(result:any)=>{
      alert(result.error.message)
    }
  })
}
else{
  this.pswCheck=true
}
  // alert("valid")
}
else{
  alert("invalid")
}

//  this.rout.navigateByUrl("")
 
  }
 
}
