import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryComponent } from './category/category.component';
import { SlideComponent } from './slide/slide.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product.service';
import { ProductDetaillComponent } from './product-detaill/product-detaill.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServicesService } from './services.service';
import { ServicesComponent } from './services/services.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductListComponent, CategoryComponent, SlideComponent, ProductComponent, ProductDetaillComponent, NotFoundComponent, ServicesComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService, ServicesService]
})
export class AppModule { }
