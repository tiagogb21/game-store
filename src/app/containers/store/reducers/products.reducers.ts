import { LOAD_PRODUCTS_SUCCESS } from 'src/app/data/data';
import { ProductsAction } from '..';

interface Products {
  id: number;
  name: string;
}

export interface ProductsState {
  entities: { [id: number]: Products };
  loaded: boolean;
  loading: boolean;
}

export const initialState: ProductsState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state: ProductsState = initialState,
  action: ProductsAction
): ProductsState {
  switch (action.type) {
    case LOAD_PRODUCTS_SUCCESS: {
      const products = action.payload;
      const entities = products.reduce(
        (accEntities: { [id: number]: Products }, products: any) => {
          return {
            ...accEntities,
            [products.id]: products,
          };
        },
        {
          ...state.entities, // initial value
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }
  }

  return state;
}
