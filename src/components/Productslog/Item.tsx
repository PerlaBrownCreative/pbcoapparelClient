import React from "react";
import Button from "@material-ui/core/Button";

//Types
import { CartItemType } from "./ProductslogFetch";
//Styles
import { Wrapper } from "./Item.style";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <div className="itemwrapper">
      <img className="itemimg" src={item.image} alt={item.title} />
    </div>
    <div className="iteminner">
      <h4 className="itemtitle">{item.title}</h4>
      <h4 className="itemprice">${item.price.toFixed(0)}</h4>
    </div>
    <Button className="itembtn" onClick={() => handleAddToCart(item)}>
      Add to cart
    </Button>
  </Wrapper>
);

export default Item;
