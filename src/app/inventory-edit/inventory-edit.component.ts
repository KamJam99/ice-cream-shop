import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { IceCreamItem } from "../models/ice-cream-item";
import { IceCreamService } from "../services/ice-cream.service";

@Component({
  selector: 'app-inventory-edit',
  templateUrl: './inventory-edit.component.html',
  styleUrls: ['./inventory-edit.component.css']
})
export class InventoryEditComponent implements OnInit {

  iceCreams: IceCreamItem[] = [];
  currentIceCream?: IceCreamItem = new IceCreamItem;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private iceCreamService: IceCreamService
  ) { }

  ngOnInit(): void {
    this.iceCreamService.getIceCreamItems().subscribe(items => this.iceCreams = items);
    if (this.route.snapshot.paramMap.get('name')){
      const name = this.route.snapshot.paramMap.get('name');
      this.currentIceCream = this.iceCreams.find(i => i.name == name);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
