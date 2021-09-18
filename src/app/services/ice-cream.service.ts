import { Injectable } from '@angular/core';
import { IceCreamItem } from "../models/ice-cream-item";
import {CartItem} from "../models/cart-item";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class IceCreamService {

  private cartItems: CartItem[] = [];
  private cartItemUrl = "api/cartItems"
  private iceCreamItemUrl = "api/iceCreamItems"
  httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }

  constructor(private http:HttpClient) {
  }

  getIceCreamItems(): Observable<IceCreamItem[]> {
    return this.http.get<IceCreamItem[]>(this.iceCreamItemUrl)
      .pipe(
        tap(_ => console.log("fetched ice cream items")),
        catchError(this.handleError<IceCreamItem[]>("getIceCreamItems", []))
      );
  }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.cartItemUrl)
      .pipe(
        tap(_ => console.log("fetched cart items")),
        catchError(this.handleError<CartItem[]>("getCartItems", []))
      );
  }

  addToCart(iceCreamItem: IceCreamItem): Observable<CartItem[]> {

    let foundItem = this.cartItems.find(i => i.iceCreamName === iceCreamItem.name);

    if (foundItem) {
      foundItem.scoopCount += 1;
      // TODO:  Make the PUT call here.
      // TODO:  Need to calculate sub total here.
    } else {
      // let maxNum = Math.max.apply(Math, this.cartList.map(function(c) {return c.id}));
      let tempCartItem = new CartItem();
      // tempCartItem.id = maxNum + 1;
      tempCartItem.iceCreamName = iceCreamItem.name;
      tempCartItem.scoopCount = 1;
      tempCartItem.subTotal = iceCreamItem.price;
      this.addCartItem(tempCartItem).subscribe(item => this.cartItems.push(item));
    }

    return of(this.cartItems);
  }

  addIceCreamItem(item:IceCreamItem): Observable<IceCreamItem> {
    return this.http.post<IceCreamItem>(this.iceCreamItemUrl, item, this.httpOptions)
      .pipe(
        tap((newItem: IceCreamItem) => console.log("added IceCreamItem with id ${newItem.id}")),
        catchError(this.handleError<IceCreamItem>("addIceCreamItem"))
      );
  }

  addCartItem(item:CartItem): Observable<CartItem> {
    return this.http.post<CartItem>(this.cartItemUrl, item, this.httpOptions)
      .pipe(
        tap((newItem: CartItem) => console.log("added CartItem with id ${newItem.id}")),
        catchError(this.handleError<CartItem>("addCartItem"))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
