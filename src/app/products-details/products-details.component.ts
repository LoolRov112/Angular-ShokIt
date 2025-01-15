import { Component } from '@angular/core';
import { Product } from '../models/products';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css',
})
export class ProductsDetailsComponent {
  selectedProduct: Product | undefined;
  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    productService: ProductsService
  ) {
    let id = actRoute.snapshot.params['id'];
    this.selectedProduct = productService.getById(id);
  }
  goBackHome() {
    this.router.navigateByUrl('home');
  }
}
