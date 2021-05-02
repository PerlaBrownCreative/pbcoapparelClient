import React from "react";
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import Item from "../Productslog/Item";
//Types
import { CartItemType } from "../Productslog/ProductsFetch2";
//Styles
import { Wrapper } from "./CartItem.Style";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <Wrapper className="checkoutCard">
    <div >
      {/* <h3>{item.design_name}</h3> */}
      <img src={item.image} alt={item.design_name} />
      <div className="information">
        <p>Price: ${item.price}
        <br/> <strong>
        Total: ${(item.amount * item.price).toFixed(2)}</strong></p>
      </div>
      <div className="buttons">
        <Button
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </div>
    </div>

    
  </Wrapper>
);

export default CartItem;
