import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCES } from "../contants/ProductConstants";

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return { loading: true, products: [] };
      case PRODUCT_LIST_SUCCES:
        return {
          loading: false,
          products: action.payload.hits,
          nbpage:action.payload.nbPages
          /* pages: action.payload.pages,
          page: action.payload.page, */
        };
      case PRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };