let count: number = 18;
import { Injectable } from '@angular/core';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[];
  constructor() {
    this.products = [
      // Fruits
      new Product(
        1,
        'Avocado',
        'Atinger',
        10,
        'assets/images/Atinger.jpeg',
        'A creamy and smooth avocado, perfect for salads or guacamole.',
        'fruit'
      ),
      new Product(
        2,
        'Apple',
        'Pink-Lady',
        12,
        'assets/images/pinkLady.jpeg',
        'A sweet and tangy apple with a crisp texture.',
        'fruit'
      ),
      new Product(
        3,
        'Grapes',
        'Seible',
        20,
        'assets/images/seible.png',
        'Fresh and juicy grapes, ideal for snacking.',
        'fruit'
      ),
      new Product(
        4,
        'Passion-fruit',
        'Edulis',
        30,
        'assets/images/passifloraEdulis.jpg',
        'A tropical fruit with a tangy taste and a fragrant aroma.',
        'fruit'
      ),
      new Product(
        5,
        'Chestnuts',
        'Asian',
        22,
        'assets/images/chestnuts.jpg',
        'Sweet and earthy chestnuts, perfect for roasting.',
        'fruit'
      ),
      new Product(
        6,
        'Dragon Fruit',
        'Pitaya',
        15,
        'assets/images/dragonFruit.jpg',
        'A vibrant fruit with a mildly sweet taste and crunchy texture.',
        'fruit'
      ),
      new Product(
        7,
        'Mangosteen',
        'Queen of Fruits',
        25,
        'assets/images/QueenOfFruits.jpg',
        'A tropical fruit with a juicy, sweet flavor and white flesh.',
        'fruit'
      ),
      new Product(
        8,
        'Rambutan',
        'Exotic',
        18,
        'assets/images/rambutan.png',
        'A spiky fruit with a sweet and juicy interior, similar to lychee.',
        'fruit'
      ),
      new Product(
        9,
        'Pineberry',
        'White Strawberry',
        40,
        'assets/images/Pineberry.jpg',
        'A rare white strawberry with a pineapple-like flavor.',
        'fruit'
      ),

      // Dairy
      new Product(
        10,
        'Milk',
        'Full Cream',
        5,
        'assets/images/milk.jpg',
        'Fresh whole milk, rich and creamy.',
        'dairy'
      ),
      new Product(
        11,
        'Cheese',
        'Cheddar',
        7,
        'assets/images/cheese.jpg',
        'A firm, sharp cheese perfect for sandwiches.',
        'dairy'
      ),
      new Product(
        12,
        'Yogurt',
        'Greek',
        4,
        'assets/images/yogurt.jpg',
        'Thick and creamy Greek yogurt, high in protein.',
        'dairy'
      ),

      // Nuts
      new Product(
        13,
        'Almonds',
        'Raw',
        8,
        'assets/images/almonds.jpg',
        'Fresh and crunchy almonds, perfect for snacking.',
        'nuts'
      ),
      new Product(
        14,
        'Cashews',
        'Salted',
        10,
        'assets/images/cashews.jpg',
        'Salted cashews, a tasty and satisfying snack.',
        'nuts'
      ),
      new Product(
        15,
        'Peanuts',
        'Roasted',
        5,
        'assets/images/peanuts.jpg',
        'Roasted peanuts, a classic snack for any occasion.',
        'nuts'
      ),

      // Vegetables
      new Product(
        16,
        'Carrot',
        'Organic',
        3,
        'assets/images/carrot.jpg',
        'Fresh organic carrots, perfect for salads or cooking.',
        'vegetable'
      ),
      new Product(
        17,
        'Tomato',
        'Roma',
        6,
        'assets/images/tomato.jpg',
        'Sweet and juicy Roma tomatoes, ideal for salads.',
        'vegetable'
      ),
      new Product(
        18,
        'Cucumber',
        'Green',
        4,
        'assets/images/cucumber.jpg',
        'Crunchy and refreshing cucumbers, perfect for salads.',
        'vegetable'
      ),
    ];
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
    this.products.push(p);
  }
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
