import { IProduct, ProductSortOrder } from '../products/models';
import { IAppState } from './IAppState';
import { FILTER_PRODUCTS, REQUEST_PRODUCTS_SUCCESS, SORT_PRODUCTS } from '../products/product.actions';

const products = [];

const initialState: IAppState = {
  products,
  filteredProducts: products,
  selectedSortOrder: ProductSortOrder.Manufacturer
};

function filterProducts(state, action): IAppState {
  return Object.assign({}, state, {
    filteredProducts: state.products.filter(
      (c => getMakeModel(c).indexOf(action.searchText.toLowerCase()) > -1)
  )});
}

function storeProducts(state, action): IAppState {
  return Object.assign({}, state, {
    products: action.products,
    filteredProducts: action.products
  });
}

function sortProducts(state, sortOrder: ProductSortOrder): IAppState {
  switch (sortOrder) {
    case 2:
      return sortByManufacturer(state);
    case 0:
      return sortByPriceLoHi(state);
    case 1:
      return sortByPriceHiLo(state);
    default:
      return state;
  }
}

function sortByManufacturer(state): IAppState {
  return Object.assign({}, state, {
    products: state.products.slice().sort(                  // use slice() to work on a copy of the array
      (x, y) => getMakeModel(x) < getMakeModel(y) ? -1 : 1
    ),
    filteredProducts: state.filteredProducts.slice().sort(
      (x, y) => getMakeModel(x) < getMakeModel(y) ? -1 : 1
    ),
    selectedSortOrder: ProductSortOrder.Manufacturer
  });
}

function sortByPriceLoHi(state): IAppState {
  return Object.assign({}, state, {
    products: state.products.slice().sort(
      (x, y) => x.price < y.price ? -1 : 1
    ),
    filteredProducts: state.filteredProducts.slice().sort(
      (x, y) => x.price < y.price ? -1 : 1
    ),
    selectedSortOrder: ProductSortOrder.PriceLoHi
  });
}

function sortByPriceHiLo(state): IAppState {
  return Object.assign({}, state, {
    products: state.products.slice().sort(
      (x, y) => x.price >= y.price ? -1 : 1
    ),
    filteredProducts: state.filteredProducts.slice().sort(
      (x, y) => x.price >= y.price ? -1 : 1
    ),
    selectedSortOrder: ProductSortOrder.PriceHiLo
  });
}

function getMakeModel(product: IProduct): string {
  return `${product.make.toLowerCase()} ${product.model.toLowerCase()}`;
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_PRODUCTS:
      return sortProducts(filterProducts(state, action), state.selectedSortOrder);
    case REQUEST_PRODUCTS_SUCCESS:
      return sortProducts(storeProducts(state, action), state.selectedSortOrder);
    case SORT_PRODUCTS:
      return sortProducts(state, action.sortOrder);
    default:
      return state;
  }

}
