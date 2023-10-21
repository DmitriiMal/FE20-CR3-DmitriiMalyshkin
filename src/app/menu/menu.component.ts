import { Component } from '@angular/core';
import { Iproducts } from '../Iproducts';
import { products } from '../products';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  products: Iproducts[] = products;
}
