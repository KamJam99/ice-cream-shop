import { Component, OnInit } from '@angular/core';
import { IceCreamItem } from "../models/ice-cream-item";
import { IceCreamService } from "../services/ice-cream.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  iceCreams: IceCreamItem[] = [];

  constructor(private iceCreamService: IceCreamService, private router: Router) {
  }

  ngOnInit() {
    this.iceCreamService.getIceCreamItems().subscribe(items => this.iceCreams = items);
  }

  buttonClick() {
    let booleanPromise = this.router.navigateByUrl("/inventory-edit");
  }
}
