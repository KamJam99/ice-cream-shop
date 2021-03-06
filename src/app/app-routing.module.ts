import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryListComponent } from "./inventory-list/inventory-list.component";
import { InventoryEditComponent } from "./inventory-edit/inventory-edit.component";
import { IceCreamStoreComponent } from "./ice-cream-store/ice-cream-store.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'inventory-list', component: InventoryListComponent },
  { path: 'inventory-edit/:name', component: InventoryEditComponent },
  { path: 'inventory-edit', component: InventoryEditComponent },
  { path: 'ice-cream-store', component: IceCreamStoreComponent },
  { path: '', redirectTo: 'home-page', pathMatch: 'full' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
