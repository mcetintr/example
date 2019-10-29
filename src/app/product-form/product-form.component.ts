import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../repository.model';
import { Product } from '../product.model';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  model: ProductRepository;
  newProduct : Product = new Product();

  get jsonProduct(){
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product){
    console.log("New Product : " + this.jsonProduct);
  }
  constructor() { }

}
