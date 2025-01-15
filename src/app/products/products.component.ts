import { Component, Input } from '@angular/core';
import { Product } from '../models/products';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../services/products.service';
import {
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  productsToShow: Product[] = [];
  allProduct: Product[] = [];
  searchForm!: FormGroup;
  constructor(
    private productService: ProductsService,
    private formBuilder: FormBuilder
  ) {
    this.allProduct = productService.getproducts();
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
        this.productsToShow = this.productService.getproducts();
      else this.productsToShow = this.productService.getByPrice(price);
    }
  }
}
