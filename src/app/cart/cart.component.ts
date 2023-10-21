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
  total: number = 0;

  constructor(private CS: CartService) {}
  ngOnInit(): void {
    this.cart = this.CS.getCart();
    this.total = this.CS.calcTotal();
  }
}
