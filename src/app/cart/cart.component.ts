import { Component } from '@angular/core';
import { Cart } from '../models/Cart/cart';
import { CartService } from '../services/cart.service';
import { UsersService } from '../services/users.service';
import { CommonModule } from '@angular/common';
import { Product } from '../models/products';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  currentCart: Cart | undefined;
  userEmail: string | undefined;
  cartItems: Product[] = [];
  totalPrice: number = 0;

  constructor(cartService: CartService, userService: UsersService) {
    this.userEmail = sessionStorage.getItem('mail') || undefined;
    if (this.userEmail) {
      cartService.getCartByEmail(this.userEmail).subscribe((cart: Cart) => {
        console.log('Cart fetched:', cart);
        this.currentCart = cart;
        this.cartItems = cart.items.map((item) => {
          const p = item.productId; 
          return new Product(
            p.name,
            p.type,
            p.price,
            p.image,
            p.description,
            p.category,
            p.stock
          );
        });
        console.log('Cart fetched:', this.cartItems[0].image);

        // cart.items.forEach((item, index) => {
        //   console.log(`Item #${index}`, item);
        // });
      });
    } else {
      console.error('User email not found in session storage.');
    }
  }
}
