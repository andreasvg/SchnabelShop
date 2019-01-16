import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux, select } from '@angular-redux/store';
import { IProduct } from '../models';
import { ProductActions} from '../product.actions';
import { IAppState } from '../../store/IAppState';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @select('filteredProducts') filteredProducts$: Observable<IProduct>;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private productActions: ProductActions
  ) { }

  ngOnInit() {
    this.productActions.getProducts();
  }



}
