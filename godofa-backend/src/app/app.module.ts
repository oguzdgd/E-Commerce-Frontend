import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';

import { NaviComponent } from './components/navi/navi.component';
import { GameComponent } from './components/game/game.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { GameCategoryComponent } from './components/game-category/game-category.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NaviComponent,
    GameComponent,
    ProductCategoryComponent,
    GameCategoryComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
