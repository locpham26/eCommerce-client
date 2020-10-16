import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

function Table({ columns, data }) {
  return (
    <table className="table table-striped">
      <TableHeader columns={columns} />
      <TableBody columns={columns} data={data} />
    </table>
  );
}

export default Table;
