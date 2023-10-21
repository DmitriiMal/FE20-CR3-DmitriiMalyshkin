import { Component } from '@angular/core';
import { Iproducts } from '../Iproducts';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  products: Iproducts[] = products;
  product: Iproducts = {} as Iproducts;

  constructor(private CS: CartService) {}

  addToCart(product: Iproducts) {
    this.CS.addToCart(product);
    alert('Product added to the cart');
  }
}
