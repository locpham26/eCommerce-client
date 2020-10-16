import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategories,
  requestCategories,
  filterProducts,
} from "./../../store/products";

function CategoriesList() {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  useEffect(() => {
    dispatch(requestCategories());
  }, [dispatch]);
  return (
    <ul className="list-group list-group-flush">
      <li
        key="All"
        className="list-group-item list-group-item-action"
        onClick={() => dispatch(filterProducts(""))}
      >
        All
      </li>
      {categories.map((category) => (
        <li
          key={category._id}
          className="list-group-item list-group-item-action"
          onClick={() => dispatch(filterProducts(category._id))}
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
}

export default CategoriesList;
