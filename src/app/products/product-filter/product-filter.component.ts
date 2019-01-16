import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { ProductActions} from '../product.actions';
import { IAppState } from '../../store/IAppState';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  public filterText: string;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private productActions: ProductActions
      ) { }

  ngOnInit() {
  }

  filterChanged(event: any): void {
    event.preventDefault();
    this.productActions.filterProducts(this.filterText);
  }
}
