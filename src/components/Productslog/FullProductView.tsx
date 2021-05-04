import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { CartItemType } from "./ProductsFetch2";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

// type Props = {
//   item: CartItemType;
//   handleAddToCart: (clickedItem: CartItemType) => void;
// };

// console.log(Item)

// const Item: React.FC<Props> = ({ item, handleAddToCart }) => (

//   <Card>
//     <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
//     <CardBody>
//       {/* <CardTitle tag="h5">{props.item.design_name}</CardTitle> */}
//       <CardSubtitle tag="h6" className="mb-2 text-muted">
//         Card subtitle
//       </CardSubtitle>
//       <CardText>
//         Some quick example text to build on the card title and make up the bulk
//         of the card's content.
//       </CardText>
//       <Button>Button</Button>
//     </CardBody>
//   </Card>
// );

// export default Item;

export interface FullProductViewProps {
//   item: CartItemType;
//   handleAddToCart: (clickedItem: CartItemType) => void;
}

export interface FullProductViewState {}

class FullProductView extends React.Component<
  FullProductViewProps,
  FullProductViewState
> {
  constructor(props: FullProductViewProps) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(this.props.item);
    // console.log(this.props.handleAddToCart);
    return (
      <div><h1>Hello</h1>
        <Card>
          <CardImg
            top
            width="100%"
            src="/assets/318x180.svg"
            alt="Card image cap"
          />
          <CardBody>
            {/* <CardTitle tag="h5">{props.item.design_name}</CardTitle> */}
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default FullProductView;
