import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { CartItem } from './cart-item';
import { CartItems } from './cart-items';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCart(): CartItem[] {
    return CartItems;
  }

  addTocart(product: Product) {

    let item = CartItems.find(c => c.product.id === product.id)

    if (item) {
      item.quantity++;
    } else {
      let cartItem: CartItem = { product: product, quantity: 1 }
      CartItems.push(cartItem)
    }

  }
}
