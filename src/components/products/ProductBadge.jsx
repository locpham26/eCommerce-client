import React from "react";
import { getQuantityById } from "../../store/cart";
import { useSelector } from "react-redux";

function ProductBadge({ productId }) {
  const quantityById = useSelector(getQuantityById(productId));
  return <span className="badge badge-pill badge-danger">{quantityById}</span>;
}

export default ProductBadge;
