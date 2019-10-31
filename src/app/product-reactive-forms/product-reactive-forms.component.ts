import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImageValidators } from '../image.validators';

@Component({
  selector: 'product-reactive-forms',
  templateUrl: './product-reactive-forms.component.html',
  styleUrls: ['./product-reactive-forms.component.css']
})
export class ProductReactiveFormsComponent {


  productForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    imageUrl: new FormControl('', [
      Validators.required,
      ImageValidators.isValidExtension
    ])

  });

  get name(){
    return this.productForm.get('name');
  }

  get imageUrl(){
    return this.productForm.get('imageUrl');
  }

  onSubmit() {
    console.log(this.productForm.value);
  }

  updateProduct() {
    this.productForm.patchValue({
      name: 'Iphone X',
      price: 5000
    });
  }

}
