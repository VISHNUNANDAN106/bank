import { Component, OnInit } from '@angular/core';
import { DataService } from '../bankservice/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // sdata:any
  name:any=""
  acno:any=""
  balance:any=""
  message:any=""
  msgClr:any=true
  dAcno:any=""
  //reactive form for money transfer

  moneyTransferForm=this.fb.group({
    rAcno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })
  constructor(private ds:DataService,private fb:FormBuilder,private dp:DatePipe,private rout:Router) { }
 ngOnInit(): void {
//   setTimeout(()=>{
//   this.ds.serviceMethod()
//   },2000)
// this.sdata=this.ds.data
//check data present or not in ls
 if(localStorage.getItem("currentUname")){
  this.name=localStorage.getItem("currentUname")
  // console.log(this.name);
 }
 //login or not
 if(!localStorage.getItem("currentAcno")){
  this.rout.navigateByUrl("")
  alert("please login first")
 }
 }
getbalance(){
  // alert("balance")
  //acno-ls
  if(localStorage.getItem("currentAcno")){
    this.acno=JSON.parse(localStorage.getItem("currentAcno")||"")
    //console.log(this.acno);
    //balance
    this.ds.getBalanceApi(this.acno).subscribe({
      next:(result:any)=>{
        //console.log(result.message);
        this.balance=result.message
      },
      error:(result:any)=>{
        alert(result.error.message)
      }
    })
  }
}
getProfile(){
  if(localStorage.getItem("currentAcno")){
    this.acno=JSON.parse(localStorage.getItem("currentAcno")||"")
console.log(this.acno);
console.log(this.name);


  }
}
moneyTransfer(){
if(this.moneyTransferForm.valid){
  var path=this.moneyTransferForm.value
  var rAcno=path.rAcno
  var amount=path.amount
  var psw=path.psw
  // console.log(rAcno);
  //sender acno
  if(localStorage.getItem("currentAcno")){
    this.acno=JSON.parse(localStorage.getItem("currentAcno")||"")
  }
  //date
  const date=new Date()
  // console.log(date);
var latestDate=this.dp.transform(date,'medium')
// console.log(latestDate);
if(this.acno==rAcno){
  this.message="Sender And Receiver Account Number Are Same"
  this.msgClr=false
}
else{
  //api
  this.ds.moneyTransferApi(this.acno,rAcno,amount,psw,latestDate).subscribe({
    next :(result:any)=>{
      // alert(result.message)
      this.message=result.message
      this.msgClr=true
    },
    error:(result:any)=>{
      // alert(result.error.message)
      this.message=result.error.message
      this.msgClr=false
    }
  })
}

  
}
else{
  // alert("invalid form")
  this.message="invalid form"
  this.msgClr=false
}
}
logout(){
    localStorage.removeItem("currentUname")
  localStorage.removeItem("currentAcno")
  this.rout.navigateByUrl("")

  }
  deleteActive(){
    if(localStorage.getItem("currentAcno")){
      this.dAcno=JSON.parse(localStorage.getItem("currentAcno")||"")
      console.log(this.dAcno);
      
    }
  }

  cancelp(){
    this.dAcno=""
  }
  yesDelete(event:any){
    // alert('Delete Api')
    // console.log(event); acno
    this.ds.accountDeleteApi(event).subscribe({
      next:(data:any)=>{
        alert(data.message)
        this.logout()
      }
    })
    
  }
}

