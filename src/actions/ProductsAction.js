import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCES } from "../contants/ProductConstants";
import Algolia from "../utils/Algolia";

export const SearchProducts=(Keyword="",pageNumber=0) => async (
    dispatch
  ) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });
      const {hits,nbPages} = await Algolia().search(Keyword, {
        page: pageNumber,
        hitsPerPage: 4
        });

      dispatch({ type: PRODUCT_LIST_SUCCES, payload: { hits,nbPages } });
    } catch (e) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          e.response && e.response.data.message
            ? e.response.data.message
            : e.message,
      });
    }
  };
  