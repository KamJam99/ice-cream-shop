import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CartItem } from '../models/cart-item';
import { IceCreamItem } from "../models/ice-cream-item";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const iceCreamItems: IceCreamItem[] = [
      {id: 1, name: 'Chocolate', scoopCount: 10, price: 2.00, colorName: "#996600"},
      {id: 2, name: 'Vanilla', scoopCount: 12, price: 2.00, colorName: "#FFFFCC"},
      {id: 3, name: 'Mint', scoopCount: 9, price: 2.50, colorName: "#CCFFCC"},
      {id: 4, name: 'Coffee', scoopCount: 10, price: 2.50, colorName: "#CC9933"},
      {id: 5, name: 'Lemon', scoopCount: 5, price: 2.50, colorName: "#FFFF99"},
      {id: 6, name: 'Blueberry', scoopCount: 7, price: 2.50, colorName: "#6666CC"}
    ];
    const cartItems: CartItem[] = [];
    return {iceCreamItems, cartItems};
  }

  genId<T extends CartItem | IceCreamItem>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id as number)) + 1 : 1;
  }
}
