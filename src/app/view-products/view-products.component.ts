import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/products';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-view-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css',
})
export class ViewProductsComponent {
  searchForm!: FormGroup;
  products: Product[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductsService
  ) {
    this.products = productService.getproducts();
    this.searchForm = this.formBuilder.group({
      category: ['', Validators.required],
    });
  }
  addProduct() {
    this.router.navigateByUrl('manageproducts/addProduct');
  }
  search() {
    let category = this.searchForm.value.category;
    console.log('saybuya');
    // if (!isNaN(price)) {
    //   if (price == null || price == '')
    //     this.productsToShow = this.productService.getproducts();
    //   else this.productsToShow = this.productService.getByPrice(price);
    // }
    if (category != '') {
      this.products = this.productService.getProductsByCategory(category);
    }
  }
  goToEdit(id: number) {
    this.router.navigateByUrl(`manageproducts/editProduct/${id}`);
  }
}
