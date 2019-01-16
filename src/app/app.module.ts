import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsPageComponent } from './products/products-page/products-page.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsService } from './products/products.service';
import { ProductActions } from './products/product.actions';
import { IAppState } from './store/IAppState';
import { store } from './store/store';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    ProductListComponent,
    ProductFilterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    CollapseModule,
    BsDropdownModule.forRoot(),
    NgReduxModule
  ],
  providers: [ProductsService, ProductActions ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }

}
