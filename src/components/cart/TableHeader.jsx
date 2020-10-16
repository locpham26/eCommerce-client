import React from "react";

function TableHeader({ columns }) {
  return (
    <thead>
      <tr className="row">
        {columns.map((column) => (
          <th key={column.key} scope="row" className={column.style}>
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
