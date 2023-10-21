import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../Iproducts';
import { products } from '../products';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'detail',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  product: Iproducts = {} as Iproducts;
  id: number = 0;
  constructor(private route: ActivatedRoute, private CS: CartService) {}

  addToCart() {
    alert('Product added to the cart');
    this.CS.addToCart(this.product);
  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.product = products[this.id];
      // console.table(this.product);
    });
  }
}
