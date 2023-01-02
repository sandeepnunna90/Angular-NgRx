import { createAction, createReducer, on } from "@ngrx/store";
import { Product } from "../product";
import * as AppState from '../../state/app.state';

// This format is for modules that are lazy loaded (see routing course to understand)
export interface State extends AppState.State {
  products: ProductState
}

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

export const productReducer = createReducer(
  { showProductCode: true },
  on(createAction('[Product] Toggle Product Code'), state => {
    console.log('original state: ' + JSON.stringify(state));
    return {
      ...state,
      showProductCode: !state.showProductCode
    };
  })
);
