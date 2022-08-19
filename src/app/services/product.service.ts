import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products!:Array<any>;
  constructor() {
    this.products=[
      {id:1,name:"LG 15",price:4500},
      {id:2,name:"Nokia 3600",price:555},
      {id:3,name:"Samsung S12",price:1700},
      {id:4,name:"POOP A12",price:700},
    ];
   }
   public getAllProducts():Observable<Array<any>>{
    return of(this.products);
   }
}
