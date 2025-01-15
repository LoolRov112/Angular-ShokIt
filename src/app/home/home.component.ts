import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../models/products';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RouterLink, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  products: Product[] = [];
  constructor(productService: ProductsService) {
    this.products = productService.getPopular();
  }
}
