import React from "react";
// import Button from "@material-ui/core/Button";
import "./ProductslogFetch1.css";
import { FaShoppingCart } from "react-icons/fa";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import FullProductView from "../Productslog/FullProductView";

//Types
import { CartItemType } from "./ProductsFetch2";
//Styles
import { Wrapper } from "./Item.style";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardColumns,
  ListGroup,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import FullItem from "../Productslog/FullProductView";

// type Props = {
//   item: CartItemType;
//   handleAddToCart: (clickedItem: CartItemType) => void;
// };

// const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
//   <>
//     <Switch>
//       <Card className="card1 text-center" outline color="none">
//         <Link to="/product_view">
//           <CardImg
//             top
//             width="100%"
//             src={item.image}
//             alt="Card image cap"
//             className="imageCard"
//           />
//         </Link>
//         <CardBody>
//           <CardTitle tag="h5" className="font-weight-bold">
//             {item.design_name}
//           </CardTitle>
//           <CardSubtitle tag="h6" className="mb-2 text-muted">
//             {item.product_description}
//           </CardSubtitle>
//           <ListGroup className="list-group-flush">
//             Size: {item.size} / Color: {item.color}
//           </ListGroup>
//           <CardText tag="h5" className="font-weight-bold">
//             ${item.price}
//           </CardText>
//           <Button className="buyButton" onClick={() => handleAddToCart(item)}>
//             <FaShoppingCart className="carticon1" />
//             Add to Cart
//           </Button>
//         </CardBody>
//       </Card>

//       <Route
//         exact
//         path="/product_view"

//       ><FullProductView item={item} handleAddToCart={handleAddToCart} /></Route>

//     </Switch>
//   </>
// );

// export default Item;

export interface Item2Props {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
}

export interface Item2State {}

class Item2 extends React.Component<Item2Props, Item2State> {
  constructor(props: Item2Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <>
            <Card className="card1 text-center" outline color="none">
              <Link to="/product_view">
                <CardImg
                  top
                  width="100%"
                  src={this.props.item.image}
                  alt="Card image cap"
                  className="imageCard"
                />
              </Link>
              <CardBody>
                <CardTitle tag="h5" className="font-weight-bold">
                  {this.props.item.design_name}
                </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  {this.props.item.product_description}
                </CardSubtitle>
                <ListGroup className="list-group-flush">
                  Size: {this.props.item.size} / Color: {this.props.item.color}
                </ListGroup>
                <CardText tag="h5" className="font-weight-bold">
                  ${this.props.item.price}
                </CardText>
                <Button
                  className="buyButton"
                  onClick={() => this.props.handleAddToCart(this.props.item)}
                >
                  <FaShoppingCart className="carticon1" />
                  Add to Cart
                </Button>
              </CardBody>
            </Card>

            

                    <Route exact path="/product_view" 
                component={() => (<FullProductView
                
                />)} />

              
           
        </>
      </div>
    );
  }
}

export default Item2;
