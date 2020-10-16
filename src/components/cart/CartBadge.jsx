import React from "react";
import { getTotalQuantity } from "../../store/cart";
import { useSelector } from "react-redux";

function CartBadge() {
  const totalQuantity = useSelector(getTotalQuantity);
  if (totalQuantity > 0) {
    return (
      <span className="badge badge-pill badge-danger">{totalQuantity}</span>
    );
  }
  return null;
}

export default CartBadge;
