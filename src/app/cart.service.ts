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

  calcSum() {
    let sum: number = 0;
    this.cart.forEach((val) => {
      sum += val.price;
    });
    return sum;
  }

  defineDiscount(sum: number, discount: number) {
    if (sum >= 40) {
      discount = 15;
    } else {
      discount = 0;
    }
    return discount;
  }

  calcTotal(sum: number, discount: number, total: number) {
    total = sum - (sum * discount) / 100;
    return total;
  }
}
