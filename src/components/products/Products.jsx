import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestProducts, getVisibleProducts } from "./../../store/products";
import ProductCard from "./ProductCard";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector(getVisibleProducts);
  useEffect(() => {
    dispatch(requestProducts());
  }, [dispatch]);
  return (
    <ul>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </ul>
  );
}

export default Products;
