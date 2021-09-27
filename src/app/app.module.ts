import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryEditComponent } from './inventory-edit/inventory-edit.component';
import { IceCreamStoreComponent } from './ice-cream-store/ice-cream-store.component';
import { InventoryChildComponent } from './inventory-child/inventory-child.component';
import { FormsModule } from "@angular/forms";
import { StoreChildComponent } from './store-child/store-child.component';
import { CartChildComponent } from './cart-child/cart-child.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService} from "./services/in-memory-data.service";
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryListComponent,
    InventoryEditComponent,
    IceCreamStoreComponent,
    InventoryChildComponent,
    StoreChildComponent,
    CartChildComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
