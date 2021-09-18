export class CartItem {
  id?: number;
  iceCreamName: string;
  scoopCount: number;
  subTotal: number;

  constructor() {
    this.id = undefined;
    this.iceCreamName = "";
    this.scoopCount = 0;
    this.subTotal = 0.0;
  }
}
