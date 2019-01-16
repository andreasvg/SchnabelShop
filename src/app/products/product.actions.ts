import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/IAppState';
import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { ProductSortOrder } from './models';

export const FILTER_PRODUCTS = 'products/FILTER';
export const REQUEST_PRODUCTS_SUCCESS = 'products/REQUEST_COURSES_SUCCESS';
export const SORT_PRODUCTS = 'products/SORT';

@Injectable()
export class ProductActions {

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private productsService: ProductsService
    ) {
  }

  getProducts(): void {
    this.productsService.getProducts()
      .subscribe(products => {
        this.ngRedux.dispatch( {
          type: REQUEST_PRODUCTS_SUCCESS,
          products
        });
      });
  }

  filterProducts(searchText: string): void {
    this.ngRedux.dispatch( {
      type: FILTER_PRODUCTS,
      searchText
    });
  }

  sortProducts(sortOrder: ProductSortOrder): void {
    this.ngRedux.dispatch({
      type: SORT_PRODUCTS,
      sortOrder: +sortOrder
    });
  }
}
