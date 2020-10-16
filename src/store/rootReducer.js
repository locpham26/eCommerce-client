import { combineReducers } from "redux";
import productsReducer from "./products";
import cartReducer from "./cart";
import userReducer from "./users";

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
  users: userReducer,
});
