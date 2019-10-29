import { Component } from '@angular/core';
import { ProductRepository } from './repository.model';
import { Product } from './product.model';

@Component({
    selector: 'app',
    templateUrl: 'product.component.html',
    styleUrls: ["product.component.css"]
})


export class ProductComponent {
    model: ProductRepository = new ProductRepository();
    product: Product = this.model.getProductById(1);
    disabled = false;

    getClasses(id: number): string {
        let product: Product = this.model.getProductById(id);
        return (product.price <= 1000 ? "bg-info" : "bg-secondary") + " m-2 p-2";

    }

    getClassMap(id: number): Object {
        let product: Product = this.model.getProductById(id);

        return {
            "bg-info": product.price <= 1000,
            "bg-secondary": product.price > 1000,
            "text-center text-white": product.name == "Samsung S6"
        }
    }

    color: string = "white";
    fontSize: "12px"

    getStyles(id: number): Object {
        let product: Product = this.model.getProductById(id);

        return {
            color: product.price <= 1000 ? "green" : "red",
            fontSize: "25px"
        }
    }

    onSubmit($event) {
        $event.stopPropagation();
        console.log("button was clicked");
        console.log($event);

    }

    onDivClicked() {
        console.log("div was clicked");
    }
    onKeyUp($event) {
        if ($event.keyCode === 13) {
            console.log('Enter was pressed');
        }
    }
    onKeyUp2() {
        console.log('Enter was pressed');
    }
    email: string = "mcetintr@gmail.com";

    onKeyUp3(){
        console.log(this.email);
    }

    today : number = Date.now();
    title : string = 'Angular kursu';
    amount : number = 123456789;
    price : number = 395.3758;
    complated : number = 0.026; 
    text : string = "En popüler front-end framework'ü Angular 8' i sıfırdan en ileri seviye kadar öğrenin.";
}