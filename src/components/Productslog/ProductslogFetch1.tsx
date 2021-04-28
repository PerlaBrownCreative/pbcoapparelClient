import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardColumns,
  CardDeck,
} from "reactstrap";
import './ProductslogFetch1.css'
import { IProductlogResponse} from "../AdminAccess/interfaces";
import ProductsCard from "./ProductsCard"

export interface ProductslogFetch1Props {
    token: string;
}

export interface ProductslogFetch1State {
    ProductInformation: any
}

class ProductslogFetch1 extends React.Component<
  ProductslogFetch1Props,
  ProductslogFetch1State
> {
  constructor(props: ProductslogFetch1Props) {
    super(props);
    this.state = {
        ProductInformation : []
    };
  }


componentDidMount() {
    fetch("http://localhost:4000/productslog/")
    .then((res) => res.json())
    .then((json: IProductlogResponse) => {
        console.log(json)
        this.setState({ProductInformation : json})
    })
}




  render() {
    return (
        <CardDeck className="cardcol1">
            {this.state.ProductInformation.length > 0 ? (
                this.state.ProductInformation.map(
                    (product: IProductlogResponse) => (
                        <ProductsCard product={product} />
                    )
                )
            ) : ( <></>
            )}
</CardDeck>
    );
  }
}

export default ProductslogFetch1;
