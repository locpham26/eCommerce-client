import React from "react";
import Products from "./Products";
import CategoriesList from "./CategoriesList";
import "./ProductPage.scss";

function ProductPage() {
  return (
    <main className="container-fluid">
      <div className="row">
        <div className="col-3">
          <CategoriesList />
        </div>
        <div className="col">
          <Products />
        </div>
      </div>
    </main>
  );
}

export default ProductPage;
