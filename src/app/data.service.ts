import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sdata="Hellooo Banglore"

  constructor() { }

  smethod(){
    alert("Service Method")
  }
}
