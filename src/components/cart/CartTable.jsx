import React from "react";
import Table from "./Table";

function CartTable({ addedItems }) {
  const columns = [
    { label: "Items", style: "col-2", key: "Items" },
    { label: "Quantity", style: "col-1 text-center", key: "Quantity" },
    { label: "", style: "w-10", key: "X" },
    { label: "Unit Price", style: "col-2 text-center", key: "Unit Price" },
    { label: "", style: "w-10", key: "=" },
    { label: "Price", style: "col-1 text-center", key: "Price" },
    { label: "", key: "Actions" },
  ];
  return <Table columns={columns} data={addedItems} />;
}

export default CartTable;
