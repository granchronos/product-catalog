import { Injectable } from '@angular/core';
import { Product } from '../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [];

  constructor() {
    this.initializeProducts();
  }

  private initializeProducts(): void {
    this.products = [
      new Product(1, 'Product 1', 10.99),
      new Product(2, 'Product 2', 20.99),
      new Product(3, 'Product 3', 30.99),
      new Product(4, 'Product 4', 40.99)
    ];
  }

  getProducts(): Product[] {
    return this.products;
  }

}
