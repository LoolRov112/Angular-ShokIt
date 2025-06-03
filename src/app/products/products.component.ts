import { Component, Input } from '@angular/core';
import { Product } from '../models/products';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../services/products.service';
import { RouterLink } from '@angular/router';

import {
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
  FormsModule,
} from '@angular/forms';
import bootstrap from '../../main.server';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  productsToShow: Product[] = [];
  allProduct: Product[] = [];
  selectedProduct: Product | null = null;
  selectedQuantity: number = 1;
  searchForm!: FormGroup;
  name: any;

  constructor(
    private productService: ProductsService,
    private formBuilder: FormBuilder
  ) {
    this.productService.getproducts().subscribe((products: Product[]) => {
      this.allProduct = products;
      this.productsToShow = products;
    });
    this.searchForm = this.formBuilder.group({
      price: ['', Validators.required],
    });
  }
  @Input() set category(cat: string) {
    if (cat == 'all') this.productsToShow = this.allProduct;
    else {
      this.productsToShow = [];
      for (let p of this.allProduct)
        if (p.category == cat) this.productsToShow.push(p);
    }
  }
  search() {
    let price = this.searchForm.value.price;
    if (!isNaN(price)) {
      if (price == null || price == '')
        this.productService.getproducts().subscribe((products: Product[]) => {
          this.productsToShow = products;
        });
      else this.productService.getByPrice(price);
    }
  }
}
