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
    disabled = true;

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
            color : product.price <= 1000 ? "green" : "red",
            fontSize : "25px"
        }
    }

}