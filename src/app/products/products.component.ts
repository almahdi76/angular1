import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!:Array<Product>;
 errorMessager!:Array<Product>;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
   this.productService.getAllProducts().subscribe({
    next:(data)=>{
      this.products=data;
    },error:(err)=>{
      this.errorMessager=err;
    }
   });
  }


  handleDeleteProduct(p:Product){
    let index=this.products.indexOf(p);
    this.products.splice(index,1);
  }

}
