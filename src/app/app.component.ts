import { Component, OnInit } from '@angular/core';


import { ProductSortOrder } from './products/models';
import { ProductActions } from './products/product.actions';
import { IAppState } from './store/IAppState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SchnabelShop';
  public isCollapsed: boolean;

  constructor(private productActions: ProductActions) {

  }

  ngOnInit() {
    this.isCollapsed = true;
  }

  setSortOrder() {
    this.productActions.sortProducts(ProductSortOrder.Manufacturer);
  }
}
