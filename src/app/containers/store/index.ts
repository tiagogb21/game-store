import {
  LoadProducts,
  LoadProductsFail,
  LoadProductsSuccess,
} from './actions/products.actions';

export type ProductsAction =
  | LoadProducts
  | LoadProductsFail
  | LoadProductsSuccess;
