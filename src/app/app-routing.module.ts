import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryListComponent } from "./inventory-list/inventory-list.component";
import { InventoryEditComponent } from "./inventory-edit/inventory-edit.component";
import { IceCreamStoreComponent } from "./ice-cream-store/ice-cream-store.component";

const routes: Routes = [
  { path: 'inventory-list', component: InventoryListComponent },
  { path: 'inventory-edit/:name', component: InventoryEditComponent },
  { path: 'inventory-edit', component: InventoryEditComponent },
  { path: 'ice-cream-store', component: IceCreamStoreComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
