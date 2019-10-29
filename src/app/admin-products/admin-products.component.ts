import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../repository.model';
import { Product } from '../product.model';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {

  products;
  model: ProductRepository;
  selectedProduct: Product;

  constructor() {
    this.model = new ProductRepository();
    this.products = this.model.getProducts();
  }

  getSelected(product : Product) : boolean{
    return product == this.selectedProduct;
  }

  editProduct(product : Product){
    this.selectedProduct = product;
  }

  saveChanges(){
    const p = this.model.getProductById(this.selectedProduct.id);
    p.name = this.selectedProduct.name;
    p.imageUrl = this.selectedProduct.imageUrl;
    p.price = this.selectedProduct.price;
    p.description = this.selectedProduct.description;
    this.selectedProduct = null;

  }
}
