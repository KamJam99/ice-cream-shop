import { Component, OnInit, Input } from '@angular/core';
import { IceCreamItem } from "../models/ice-cream-item";

@Component({
  selector: 'app-inventory-child',
  templateUrl: './inventory-child.component.html',
  styleUrls: ['./inventory-child.component.css']
})
export class InventoryChildComponent implements OnInit {

  @Input() iceCreamItem?: IceCreamItem;

  constructor() { }

  ngOnInit(): void {
  }

}
