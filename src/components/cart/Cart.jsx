import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAddedItems,
  emptyCart,
  getTotalPrice,
  checkOut,
} from "./../../store/cart";
import CartTable from "./CartTable";
import EmptyButton from "./../button/EmptyButton";
import CheckOutButton from "../button/CheckOutButton";

function Cart() {
  const addedItems = useSelector(getAddedItems);
  const totalPrice = useSelector(getTotalPrice);
  const dispatch = useDispatch();
  return (
    <>
      <EmptyButton onEmpty={() => dispatch(emptyCart())} />
      <CartTable addedItems={addedItems} />
      <p>{totalPrice}</p>
      <CheckOutButton onCheckOut={() => dispatch(checkOut())} />
    </>
  );
}

export default Cart;
