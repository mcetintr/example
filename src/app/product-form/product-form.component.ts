import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../repository.model';
import { Product } from '../product.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  model: ProductRepository;
  newProduct: Product = new Product();

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    console.log("New Product : " + this.jsonProduct);
  }

  log(m) {
    console.log(m);
  }

  formSumitted : boolean = false;

  submitForm(form:NgForm){
    this.formSumitted = true;
    if(form.valid){
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset;
      this.formSumitted = false;
    }

    console.log(form);
  }

  getValidationErrors(model: any) {
    let ctrlName: string = model.name;
    let messages: string[] = [];

    if (model.errors) {
      //console.log(model.errors);
      for (const errorName in model.errors) {
        //console.log(errorName);
        switch (errorName) {
          case "required":
            messages.push(`You must enter a ${ctrlName}`);
            break;
          case "minlength":
            messages.push(`min 3 character for ${ctrlName}`);
            break;
          case "pattern":
            messages.push(`${ctrlName} contains illegal characters.`);
            break;
  
          default:
            break;
        }        
      }
    }
   return messages;

  }
  constructor() { }

}
