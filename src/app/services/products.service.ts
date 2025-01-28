let count: number = 18;
import { Injectable } from '@angular/core';
import { Product } from '../models/products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url: string = 'http://localhost:3000/products';
  headers = { 'content-type': 'application/json' };
  products: Product[] = [];
  constructor(private http: HttpClient) {
    this.refresh();
  }
  refresh() {
    this.initProducts().subscribe((data) => (this.products = data));
  }
  initProducts(): Observable<any> {
    return this.http.get(this.url);
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter((product) => product.category === category);
  }
  getproducts() {
    return this.products;
  }
  getPopular(): Product[] {
    return this.products.filter(
      (product) => product.id >= 1 && product.id <= 7
    );
  }
  getById(id: number) {
    return this.products.find((product) => product.id == id);
  }
  // service
  insert(product: Product) {
    let body = JSON.stringify(product);
    return this.http.post(this.url, body, { headers: this.headers });
  }
  // client
  add(
    name: string,
    type: string,
    price: number,
    img: string,
    description: string,
    category: string
  ) {
    let p: Product = new Product(
      ++count,
      name,
      type,
      price,
      img,
      description,
      category
    );
    this.insert(p).subscribe((data) => this.refresh());
  }

  // service
  update(product: Product): Observable<any> {
    let body = JSON.stringify(product);
    return this.http.put(this.url, body, { headers: this.headers });
  }
  // client
  change(
    id: number,
    name: string,
    type: string,
    price: number,
    image: string,
    description: string,
    category: string
  ) {
    let product = this.products.find((p) => p.id == id);
    if (product) {
      product.name = name;
      product.type = type;
      product.price = price;
      product.image = image;
      product.description = description;
      product.category = category;
      this.update(product).subscribe((data) => this.refresh());
    }
  }
  // // service
  // delete(product: Product) {
  //   let urlById = `${this.url}/${product.id}`;
  //   return this.http.delete(urlById, { headers: this.headers });
  // }
  // // client
  // remove(product: Product) {
  //   this.delete(product).subscribe(() => this.refresh);
  // }

  getByPrice(price: number) {
    return this.products.filter((product) => product.price <= price);
  }
  getByLetter(letter: string) {
    return this.products.filter(
      (product) =>
        product.description.toLowerCase().includes(letter.toLowerCase()) &&
        this.products.filter(
          (product) =>
            product.name.toLowerCase().includes(letter.toLowerCase()) &&
            this.products.filter((product) =>
              product.category.toLowerCase().includes(letter.toLowerCase())
            )
        )
    );
  }
}
