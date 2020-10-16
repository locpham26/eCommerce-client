import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementProduct,
  decrementProduct,
  addProduct,
} from "../../store/cart";
import AddButton from "../button/AddButton";
import DecrementButton from "../button/DecrementButton";
import IncrementButton from "./../button/IncrementButton";
import ProductBadge from "./ProductBadge";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const addedItems = useSelector((state) => state.cart.addedItems);
  const index = addedItems.findIndex((item) => item.id === product._id);
  return (
    <div className="card" style={{ maxHeight: 600, maxWidth: 300 }}>
      <img src={product.imageUrl} className="card-img-top" alt={product.name} />

      <div className="card-body">
        <h4 className="card-title">
          <strong>{product.name}</strong>
          <ProductBadge productId={product._id} />
        </h4>
      </div>
      <div className="card-footer">
        <div className="row">
          <div className="col-9">Price: ${product.price}</div>
          {index >= 0 ? (
            <>
              <IncrementButton
                onIncrement={() => dispatch(incrementProduct(product._id))}
              />
              <DecrementButton
                onDecrement={() => dispatch(decrementProduct(product._id))}
              />
            </>
          ) : (
            <AddButton onAdd={() => dispatch(addProduct(product._id))} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
