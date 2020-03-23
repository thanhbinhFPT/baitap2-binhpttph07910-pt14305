import { Injectable } from '@angular/core';
import { Data } from './MockData';
import { Product } from './product';

@Injectable()
export class ProductService {
  products = Data;
  constructor() { }

  getProducts(){
    return this.products;
  }
  // addProduct(product){
  //   let newObject = { id:6, ...product };
  //   this.products.push(newObject);
  // }
}