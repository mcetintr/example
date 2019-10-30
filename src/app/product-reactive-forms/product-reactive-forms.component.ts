import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'product-reactive-forms',
  templateUrl: './product-reactive-forms.component.html',
  styleUrls: ['./product-reactive-forms.component.css']
})
export class ProductReactiveFormsComponent {


  productForm = new FormGroup({
      name : new FormControl('Samsung S5'),
      description : new FormControl('iyi telefon'),
      price : new FormControl('1000'),
      imageUrl : new FormControl('1.jpg')

    });
  
  onSubmit(){
    console.log(this.productForm.value);
  }

  updateProduct(){
    this.productForm.patchValue({
      name : 'Iphone X',
      price : 5000
    });
  }

}
