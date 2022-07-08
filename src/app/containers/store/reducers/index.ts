import { ActionReducerMap } from '@ngrx/store';
import * as fromProducts from './products.reducers';

export interface ProductsFeatureState {
  products: fromProducts.ProductsState;
}

export const reducers: ActionReducerMap<ProductsFeatureState> = {
  products: fromProducts.reducer,
};
