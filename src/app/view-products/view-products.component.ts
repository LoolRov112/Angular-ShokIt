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
    setTimeout(() => {
      this.products = productService.getproducts();
    }, 10);
    this.searchForm = this.formBuilder.group({
      category: ['', Validators.required],
    });
  }
  addProduct() {
    this.router.navigateByUrl('manageproducts/addProduct');
  }
  search() {
    let category = this.searchForm.value.category;
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
  // removeProduct(product: Product) {
  //   setTimeout(() => {
  //     this.productService.remove(product);
  //   }, 1000);
  // }
}
