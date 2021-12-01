import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {IceCreamItem} from "../models/ice-cream-item";
import {IceCreamService} from "../services/ice-cream.service";

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
  ) {
  }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('name')) {
      const id = this.route.snapshot.paramMap.get('name');
      if (id != undefined) {
        this.iceCreamService.getIceCreamItemById(id).subscribe(item => this.currentIceCream = item)
      }
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.currentIceCream) {
      if (this.currentIceCream?.id == 0) {
        this.iceCreamService.addIceCreamItem(this.currentIceCream).subscribe(item => this.currentIceCream = item);
      } else {
        this.iceCreamService.updateIceCreamItem(this.currentIceCream).subscribe();
      }
      this.showSnackbar();
      this.goBack();
    }
  }

  showSnackbar() {
    let x = document.getElementById("snackbar");
    if (x) {
      x.className = "show";
      setTimeout(function () {
        if (x) {
          x.className = x.className.replace("show", "");
        }
      }, 3000);
    }
  }
  }
