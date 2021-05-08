import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
//components
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShippingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import Item2 from "./Item2";
import Cart2 from "../Cart/Cart2";
import FullProductView from "../Productslog/FullProductView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "../Contact";
import APIURL from '../../helpers/environment'


//styles
import { Wrapper, StyledButton } from "./ProductslogFetch.styles";

interface CartItemProps {
  // token: string;
}

//Types
export type CartItemType = {
  id: number;
  design_name: string;
  product_description: string;
  color: string;
  size: string;
  image: string;
  price: number;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch(`${APIURL}/productslog/`)).json();

const ProductslogCards: React.SFC<CartItemProps> = (props) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );


  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      //1. Is item already added in the cart?
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      //First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <Switch>
      <Wrapper>
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <Cart2
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />
        </Drawer>
        <StyledButton onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color="error">
            <AddShippingCartIcon />
          </Badge>
        </StyledButton>
        
          <Grid container spacing={3}>
            {data?.map((item) => (
              <Grid item key={item.id} xs={12} sm={4}>
                
                
                <Item2 item={item} handleAddToCart={handleAddToCart} />
                
                {/* <Route exact path="/product_view" 
                component={() => (<FullProductView
                  item={item}
                  handleAddToCart={handleAddToCart}
                />)} /> */}

             </Grid>
            ))}




          </Grid>
        
      </Wrapper>
    </Switch>
  );
};

export default ProductslogCards;
