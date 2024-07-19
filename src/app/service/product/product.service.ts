import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private products = [
    { id: 1, name: 'Phone', price: 1000 },
    { id: 2, name: 'Laptop', price: 3000 },
    { id: 3, name: 'Mouse', price: 100 },
    { id: 4, name: 'Keyboard', price: 500 }
  ]

  getProducts() {
    return this.products;
  }

}
