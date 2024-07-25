import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { ProductService } from '../../service/product/product.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule, MatCardModule, MatTableModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products:any = [];
  displayedColumns: string[] = ['name', 'price'];

  constructor(private productService: ProductService, private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  auth(): boolean {
    return this.authService.isAuthenticate();
  }

  user(): string {
    return this.authService.user();
  }

}
