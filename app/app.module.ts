import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { FoodDetailComponent } from './pages/foods/food-detail/food-detail.component';
import { FoodIndexComponent } from './pages/foods/food-index/food-index.component';
import { FoodListComponent } from './pages/foods/food-list/food-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { CartShowComponent } from './pages/cart/cart-show/cart-show.component';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    FoodsComponent,
    CartComponent,
    FoodDetailComponent,
    FoodIndexComponent,
    FoodListComponent,
    CartShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
