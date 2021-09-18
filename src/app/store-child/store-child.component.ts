import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {IceCreamItem} from "../models/ice-cream-item";

@Component({
  selector: 'app-store-child',
  templateUrl: './store-child.component.html',
  styleUrls: ['./store-child.component.css']
})
export class StoreChildComponent implements OnInit {

  @Input() iceCreamItem?: IceCreamItem;
  @Output() addToCartEvent = new EventEmitter<IceCreamItem>();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.addToCartEvent.emit(this.iceCreamItem);
  }
}
