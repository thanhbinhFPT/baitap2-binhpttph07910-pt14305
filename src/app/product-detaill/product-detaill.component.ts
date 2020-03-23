import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-product-detaill',
  templateUrl: './product-detaill.component.html',
  styleUrls: ['./product-detaill.component.css']
})
export class ProductDetaillComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}