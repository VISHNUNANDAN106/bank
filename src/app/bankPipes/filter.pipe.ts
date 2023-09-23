import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(dataAray:any[],searchTerm:string,searchKey:string): any {
    //variable to store output data
    const result:any=[]

    if(!dataAray || !searchTerm || !searchKey){
      return dataAray
    }
    else{
      //logic to transform
      dataAray.forEach((item:any)=>{
        if (item[searchKey].includes(searchTerm)){
          result.push(item)
        }
      })
      return result
    }
    
    
  }

}
