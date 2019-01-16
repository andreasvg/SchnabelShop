import { IProduct, ProductSortOrder } from '../products/models';

export interface IAppState {
  products: IProduct[];
  filteredProducts: IProduct[];
  selectedSortOrder: ProductSortOrder;
}
