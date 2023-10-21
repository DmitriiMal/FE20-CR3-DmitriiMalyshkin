import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../Iproducts';
import { products } from '../products';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'detail',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  product: Iproducts = {} as Iproducts;
  id: number = 0;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.product = products[this.id];
      // console.table(this.product);
    });
  }
}
