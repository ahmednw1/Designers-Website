import { Injectable } from '@angular/core';
import { form } from 'src/Types/form';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  forms:form[] = []
  constructor() {
   }
   getData(){
    return this.forms;
   }
   psotDta(form:form){
    this.forms.push(form)
   }
   
   public saveData(key: number, value: form) {
    localStorage.setItem(String(key), JSON.stringify(value));
  }

  public getdata(key: number) {
    let keyS:string = String(key) as string
    return JSON.parse(localStorage.getItem(keyS)!)
  }
  public removeData(key: string) {
    Object.keys(localStorage).forEach(data =>{
      localStorage.removeItem(key);
    })
    
  }
  
  getAll(){
    let forms:form[] = []
    Object.keys(localStorage).forEach(data => 
      {
      let item = JSON.parse(localStorage.getItem(data)!)
      forms.push(item); // item is the item from storage.
      });
    return forms;
  }
}
