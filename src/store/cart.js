import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import * as productApi from "./service/productsService";
import { getCurrentUser, updateUserScore } from "./users";

//reducers
const slice = createSlice({
  name: "cart",
  initialState: {
    addedItems: [],
  },
  reducers: {
    productAdded: (cart, action) => {
      cart.addedItems.push({ id: action.payload.id, quantity: 1 });
    },
    productIncremented: (cart, action) => {
      const index = cart.addedItems.findIndex(
        (addedItem) => addedItem.id === action.payload.id
      );
      cart.addedItems[index].quantity += 1;
    },
    productDecremented: (cart, action) => {
      const index = cart.addedItems.findIndex(
        (addedItem) => addedItem.id === action.payload.id
      );
      if (cart.addedItems[index].quantity > 0)
        cart.addedItems[index].quantity -= 1;
      if (cart.addedItems[index].quantity === 0) {
        cart.addedItems.splice(index, 1);
      }
    },
    productRemoved: (cart, action) => {
      const index = cart.addedItems.findIndex(
        (addedItem) => addedItem.id === action.payload.id
      );
      cart.addedItems.splice(index, 1);
    },
    emptyCart: (cart) => {
      cart.addedItems = [];
    },
  },
});

export const {
  productAdded,
  productIncremented,
  productDecremented,
  productRemoved,
  emptyCart,
} = slice.actions;

export default slice.reducer;

// Actions

export const addProduct = (productId) => (dispatch) => {
  dispatch(productAdded({ id: productId }));
};

export const incrementProduct = (productId) => (dispatch) => {
  dispatch(productIncremented({ id: productId }));
};

export const decrementProduct = (productId) => (dispatch) => {
  dispatch(productDecremented({ id: productId }));
};

export const removeProduct = (productId) => (dispatch) => {
  dispatch(productRemoved({ id: productId }));
};

//Selector

export const getAddedItems = (state) => state.cart.addedItems;
export const getTotalQuantity = (state) =>
  state.cart.addedItems.reduce(
    (totalQuantity, current) => totalQuantity + current.quantity,
    0
  );

export const getQuantityById = (itemId) => {
  return createSelector(
    (state) => state.cart.addedItems,
    (addedItems) =>
      addedItems.filter((item) => item.id === itemId).map((i) => i.quantity)
  );
};

export const getPriceByQuantity = (productId) => {
  return createSelector(
    (state) => state.products.allProducts,
    (state) => state.cart.addedItems,
    (list, addedItems) =>
      list.filter((item) => item._id === productId).map((p) => p.price) *
      addedItems
        .filter((addedItem) => addedItem.id === productId)
        .map((a) => a.quantity)
  );
};

export const getTotalPrice = (state) =>
  state.cart.addedItems.reduce(
    (totalPrice, current) => totalPrice + getPriceByQuantity(current.id)(state),
    0
  );

export const checkOut = createAsyncThunk(
  "cart/checkout",
  async (_, thunkApi) => {
    const addedItems = thunkApi.getState().cart.addedItems;
    if (addedItems.length !== 0) {
      addedItems.forEach(
        async (item) =>
          await productApi.decreaseInventory(item.id, item.quantity)
      );
    }
    const user = getCurrentUser();
    const spent = getTotalPrice(thunkApi.getState());
    console.log(spent);
    console.log(user);
    if (user) {
      updateUserScore(user._id, spent);
    }
    thunkApi.dispatch(emptyCart());
  }
);
