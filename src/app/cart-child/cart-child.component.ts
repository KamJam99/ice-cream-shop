import { Component, OnInit, Input } from '@angular/core';
import {IceCreamItem} from "../models/ice-cream-item";
import {CartItem} from "../models/cart-item";

@Component({
  selector: 'app-cart-child',
  templateUrl: './cart-child.component.html',
  styleUrls: ['./cart-child.component.css']
})
export class CartChildComponent implements OnInit {

  @Input() cartKid?: CartItem;

  constructor() { }

  ngOnInit(): void {
  }

  removeFromCart(cartItemId?: number) {
    // TODO:  Emit an event here.  Like we do in store-child
  }
}
