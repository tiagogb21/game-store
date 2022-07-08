import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_FAIL,
  LOAD_PRODUCTS_SUCCESS,
} from '../../../data/data';

export interface Action {
  type: string;
}

export class LoadProducts implements Action {
  readonly type = LOAD_PRODUCTS;
}

export class LoadProductsFail implements Action {
  readonly type = LOAD_PRODUCTS_FAIL;

  // can pass any error from server-side
  constructor(public payload: any) {}
}

export class LoadProductsSuccess implements Action {
  readonly type = LOAD_PRODUCTS_SUCCESS;
  constructor(public payload: any) {}
}
