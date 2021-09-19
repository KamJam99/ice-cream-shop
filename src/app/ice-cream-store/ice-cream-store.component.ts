import { Component, OnInit } from '@angular/core';
import { IceCreamItem } from "../models/ice-cream-item";
import { IceCreamService } from "../services/ice-cream.service";
import {Router} from "@angular/router";
import {CartItem} from "../models/cart-item";

@Component({
  selector: 'app-ice-cream-store',
  templateUrl: './ice-cream-store.component.html',
  styleUrls: ['./ice-cream-store.component.css']
})
export class IceCreamStoreComponent implements OnInit {

  iceCreams: IceCreamItem[] = [];
  cartKids: CartItem[] = [];

  constructor(private iceCreamService: IceCreamService, private router: Router) { }

  ngOnInit(): void {
    this.iceCreamService.getIceCreamItems().subscribe(items => this.iceCreams = items);
    this.iceCreamService.getCartItems().subscribe(items => this.cartKids = items);
  }

  addToCart(iceCreamItem: IceCreamItem): void {
    this.iceCreamService.addToCart(iceCreamItem).subscribe(items => this.cartKids = items);
  }

  removeFromCart(cartId: number): void {
    this.iceCreamService.removeFromCart(cartId).subscribe(item => {
      this.iceCreamService.getCartItems().subscribe(items => this.cartKids = items);
    });
  }
}
