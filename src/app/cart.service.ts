import { Injectable } from '@angular/core';
import { Iproducts } from './Iproducts';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Iproducts[] = [];

  constructor() {}

  addToCart(obj: Iproducts) {
    this.cart.push(obj);
  }

  getCart() {
    return this.cart;
  }

  calcTotal() {
    let total: number = 0;
    this.cart.forEach((val) => {
      total += val.price;
    });
    return total;
  }
}
