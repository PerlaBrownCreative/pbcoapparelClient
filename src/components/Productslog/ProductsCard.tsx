import React from 'react'
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

export interface ProductsCardProps {
    product: IProductlogResponse;
}
 
export interface ProductsCardState {
    
}
 
class ProductsCard extends React.Component<ProductsCardProps, ProductsCardState> {
    constructor(props: ProductsCardProps) {
        super(props);
        this.state = {
            

        };
    }
    render() { 
        return ( 
            <div>
<Card>
            <CardImg top width="100%"  src={this.props.product.image} alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">{this.props.product.design_name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{this.props.product.size}</CardSubtitle>
                <CardText>{this.props.product.product_description}</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>

            </div>
         );
    }
}
 
export default ProductsCard;