import {
  
  Button,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
 
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CartComponent/Cart.css";
import CartContext from "../CartContext/CartContext";
import { useContext } from "react";

const CartItem = ({ cart }) => {
  const { id, name, img, price, rate } = cart;
  const { dispatch } = useContext(CartContext);

  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE",
      payload: id,
    },0);
  };


  const [quantity, setQuantity] = useState(0);
  const [mprice, setMprice] = useState(price);

  const increaseQua = () => {
    setQuantity(quantity + 1);
    setMprice((quantity + 1) * price);
  };
  const decreaseQua = () => {
    setQuantity(quantity - 1);
    setMprice((quantity - 1) * price);
  };
  return (
    <>
        <tbody className="table-body">
          <div className="tr-row-detail">
            <Button className="table-delete" onClick={() => handleRemove(id)}>
              <img src="src/assets/CartIcon/garbage-bin.png" />
            </Button>
            <tr className="table-row1">
              <td className="table-row1-img">
                <img src={img} width={"100px"} />
              </td>
              <td className="tr-td">{name}</td>
              <td className="table-inc-dec">
                <Link className="table-dec" onClick={() => decreaseQua(id)}>
                  <img src="src/assets/CartIcon/minus.png" />
                </Link>
                <input
                  className="table-inp"
                  type="text"
                  placeholder={quantity}
                />
                <Link className="table-inc" onClick={() => increaseQua(id)}>
                  <img src="src/assets/CartIcon/plus.png" />
                </Link>
              </td>
              <td className="tr-td">Rs : {parseFloat(mprice).toFixed(2)}</td>
            </tr>
          </div>
        </tbody>    
    </>
  );
};

export default CartItem;
