import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import * as productApi from "./service/productsService";
import * as categoryApi from "./service/categoriesService";

export const requestProducts = createAsyncThunk(
  "products/requestProducts",
  async () => {
    const { data } = await productApi.getProducts();
    console.log(data);
    return data;
  }
);

export const requestCategories = createAsyncThunk(
  "categories/requestCategories",
  async () => {
    const { data } = await categoryApi.getCategories();
    return data;
  }
);

const slice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    visibleProducts: [],
    categories: [],
  },
  reducers: {
    productsFiltered: (products, action) => {
      products.visibleProducts = action.payload
        ? products.allProducts.filter((p) => p.category._id === action.payload)
        : products.allProducts;
    },
  },
  extraReducers: {
    [requestProducts.fulfilled]: (products, action) => {
      products.allProducts = action.payload;
      if (products.visibleProducts.length === 0) {
        products.visibleProducts = action.payload;
      }
    },
    [requestCategories.fulfilled]: (products, action) => {
      products.categories = action.payload;
    },
  },
});
export const { productsFiltered } = slice.actions;
export default slice.reducer;

export const getAll = (state) => state.products.allProducts;
export const getAllCategories = (state) => state.products.categories;
export const getVisibleProducts = (state) => state.products.visibleProducts;

export const getNameById = (productId) => {
  return createSelector(
    (state) => state.products.allProducts,
    (allProducts) =>
      allProducts.filter((item) => item._id === productId).map((p) => p.name)
  );
};

export const getPriceById = (productId) => {
  return createSelector(
    (state) => state.products.allProducts,
    (allProducts) =>
      allProducts.filter((item) => item._id === productId).map((p) => p.price)
  );
};

export const filterProducts = (categoryId) => (dispatch) => {
  dispatch(productsFiltered(categoryId));
};
