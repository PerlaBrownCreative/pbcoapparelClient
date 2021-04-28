import React from "react";
import { IProductlogResponse } from "../AdminAccess/interfaces";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardColumns,
} from "reactstrap";
import './ProductslogFetch1.css'
import { FaShoppingCart } from 'react-icons/fa';



export interface ProductsCardProps {
  product: IProductlogResponse;
}

export interface ProductsCardState {
    cartOpen: Boolean;
    cartItems: IProductlogResponse[];
    cart: [];
}

class ProductsCard extends React.Component<
  ProductsCardProps,
  ProductsCardState
> {
  constructor(props: ProductsCardProps) {
    super(props);
    this.state = {
        cartOpen: false,
        cartItems: [],
        cart: []
    };
  }

  addToCart = (products: []) => {
      console.log('we are in addToCart')
      this.setState({cart: products})
  }




  render() {
    return (
        <Card className="card1 text-center" outline color="none">
          <CardImg
            top
            width="100%"
            src={this.props.product.image}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">{this.props.product.design_name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {this.props.product.size}
            </CardSubtitle>
            <CardText>{this.props.product.product_description}</CardText>
            <Button className="buyButton"><FaShoppingCart className="carticon1"/>Add to Cart</Button>
          </CardBody>
        </Card>
    );
  }
}

export default ProductsCard;
