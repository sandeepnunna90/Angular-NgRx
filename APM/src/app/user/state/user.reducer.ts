import { createAction, createReducer, on } from "@ngrx/store";

export const userReducer = createReducer(
  { maskUserName: false },
  on(createAction('[User] Mask User Name'), state => {
    console.log('original user slice state', state);
    return {
      ...state,
      maskUserName: !state.maskUserName
    };
  })
);
