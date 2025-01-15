import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductsService } from '../services/products.service';
// import { Product } from '../models/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  addProductForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router
  ) {
    this.addProductForm = this.formBuilder.group({
      productName: ['', Validators.required],
      productType: ['', Validators.required],
      productPrice: ['', Validators.required],
      productImage: ['', Validators.required],
      productDescription: ['', Validators.required],
      productCategory: ['', Validators.required],
    });
  }
  add() {
    let name = this.addProductForm.value.productName;
    let type = this.addProductForm.value.productType;
    let price = this.addProductForm.value.productPrice;
    let image = this.addProductForm.value.productImage;
    let description = this.addProductForm.value.productDescription;
    let category = this.addProductForm.value.productCategory;
    for (let p of this.productService.getproducts()) {
      if (name == p.name && type == p.type) {
        alert('This Products alredy exists');
        return;
      }
    }
    this.productService.add(name, type, price, image, description, category);
    this.router.navigateByUrl('manageproducts');
  }
}
