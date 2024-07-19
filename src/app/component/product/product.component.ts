import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products:any = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    console.log('ProductComponent - ngOnInit');
    this.products = this.productService.getProducts();
  }

}
