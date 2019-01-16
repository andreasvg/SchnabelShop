import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux, select } from '@angular-redux/store';
import { ProductSortOrder } from '../models';
import { ProductActions } from '../product.actions';
import { IAppState } from '../../store/IAppState';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  public productSortOrder = ProductSortOrder; // so that we can access the enum in the view
  public selectedSortOrder: ProductSortOrder;
  @select('selectedSortOrder') selectedSortOrder$: Observable<ProductSortOrder>;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private productActions: ProductActions
    ) { }

  ngOnInit() {
    this.selectedSortOrder$.subscribe((sort) => this.selectedSortOrder = sort);
  }

  changeSortOrder(event: any): void {
    this.productActions.sortProducts(this.selectedSortOrder);
  }
}
