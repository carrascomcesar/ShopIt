import axios from "axios";

import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  CLEAR_ERRORS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";

export const getProducts = (currentPage = 1, keyword = "") => async (
  dispatch
) => {
  try {
    // Set Loading to True and Products as an Empty Array
    dispatch({
      type: ALL_PRODUCTS_REQUEST,
    });
    // Get Data from API Backend
    const { data } = await axios.get(
      `/api/v1/products?keyword=${keyword}&page=${currentPage}`
    );

    // Dispatch Success
    dispatch({
      type: ALL_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    // Set Loading to True and Products as an Empty Array
    dispatch({
      type: PRODUCT_DETAILS_REQUEST,
    });

    // Get Data from API Backend
    const { data } = await axios.get(`/api/v1/product/${id}`);

    // Dispatch Success
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
