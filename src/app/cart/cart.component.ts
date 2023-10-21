import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Iproducts } from '../Iproducts';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart: Iproducts[] = [];
  sum: number = 0;
  discount: number = 0;
  total: number = 0;

  constructor(private CS: CartService) {}
  ngOnInit(): void {
    this.cart = this.CS.getCart();
    this.sum = this.CS.calcSum();
    this.discount = this.CS.defineDiscount(this.sum, this.discount);
    this.total = +this.CS.calcTotal(
      this.sum,
      this.discount,
      this.total
    ).toFixed(2);
  }
}
