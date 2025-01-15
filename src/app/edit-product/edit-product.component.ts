import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/products';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent {
  editFormGroup!: FormGroup;
  productId!: number;
  product: Product | any;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
    this.productId = actRoute.snapshot.params['id'];
    this.product = productService.getById(this.productId);
    this.editFormGroup = this.formBuilder.group({
      productName: ['', Validators.required],
      productType: ['', Validators.required],
      productPrice: ['', Validators.required],
      productImage: ['', Validators.required],
      productDescription: ['', Validators.required],
      productCategory: ['', Validators.required],
    });
  }

  editProduct() {
    this.productId = this.actRoute.snapshot.params['id'];
    this.product = this.product.getById(this.productId);
    if (this.product) {
      let name = this.editFormGroup.value.productName;
      let type = this.editFormGroup.value.productType;
      let price = this.editFormGroup.value.productPrice;
      let image = this.editFormGroup.value.productImage;
      let description = this.editFormGroup.value.productDescription;
      let category = this.editFormGroup.value.productCategory;
      this.productService.change(
        this.productId,
        name,
        type,
        price,
        image,
        description,
        category
      );
    }
    this.router.navigateByUrl('manageproducts');
  }
}
