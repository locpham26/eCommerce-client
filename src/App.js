import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import NavBar from "./components/navbar/NavBar";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import ProductPage from "./components/products/ProductPage";
import LoginForm from "./components/user/LoginForm";
import RegisterForm from "./components/user/RegisterForm";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <>
        <NavBar />
        <Switch>
          <Route path="/products" component={ProductPage} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
        </Switch>
      </>
    </Provider>
  );
}

export default App;
