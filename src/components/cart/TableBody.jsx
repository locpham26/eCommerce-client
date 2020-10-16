import React from "react";
import { useDispatch, useSelector } from "react-redux";
import IncrementButton from "../button/IncrementButton";
import DecrementButton from "../button/DecrementButton";
import RemoveButton from "../button/RemoveButton";
import {
  incrementProduct,
  decrementProduct,
  removeProduct,
} from "../../store/cart";
import { getNameById, getPriceById } from "./../../store/products";
import { getPriceByQuantity } from "./../../store/cart";

const Name = ({ productId }) => {
  const nameById = useSelector(getNameById(productId));
  return <span>{nameById}</span>;
};

const Price = ({ productId }) => {
  const priceById = useSelector(getPriceById(productId));
  return <span>{priceById}</span>;
};

const PriceByQuantity = ({ productId }) => {
  const priceByQuantity = useSelector(getPriceByQuantity(productId));
  return <span>{priceByQuantity}</span>;
};

function TableBody({ data }) {
  const disptach = useDispatch();
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id} className="row">
          <td className="col-2">
            <Name productId={item.id} />
          </td>
          <td className="col-1 text-center">{item.quantity}</td>
          <td className="w-10 text-center">X</td>
          <td className="col-2 text-center">
            <Price productId={item.id} />
          </td>
          <td className="w-10 text-center">=</td>
          <td className="col-1 text-center">
            <PriceByQuantity productId={item.id} />
          </td>
          <td>
            <IncrementButton
              onIncrement={() => disptach(incrementProduct(item.id))}
            />
            <DecrementButton
              onDecrement={() => disptach(decrementProduct(item.id))}
            />
          </td>
          <td>
            <RemoveButton onRemove={() => disptach(removeProduct(item.id))} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
