import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
//initialize a variable to store data get from parent
@Input() data:String | undefined
@Output() onCancel=new EventEmitter()
@Output() onDel=new EventEmitter()
constructor() { }
   
cancel(){
 this.onCancel.emit()
}
yesdel(){
  this.onDel.emit(this.data)
}
}


