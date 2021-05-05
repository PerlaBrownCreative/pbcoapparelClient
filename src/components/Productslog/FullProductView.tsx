import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Container, 
  Row,
} from "reactstrap";
import { CartItemType } from "./ProductsFetch2";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import "./FullProductView.css";
import ReviewsCreate from "../Reviews/ReviewsCreate";

export interface FullProductViewProps extends RouteComponentProps<any> {
  //   item: CartItemType;
  //   handleAddToCart: (clickedItem: CartItemType) => void;
}

export interface FullProductViewState {
  fullview: CartItemType;
}

class FullProductView extends React.Component<
  FullProductViewProps,
  FullProductViewState
> {
  constructor(props: FullProductViewProps) {
    super(props);
    this.state = {
      fullview: {
        id: 0,
        design_name: "",
        product_description: "",
        color: "",
        size: "",
        image: "",
        price: 0,
        amount: 0,
      },
    };
    this.fetchSingleView = this.fetchSingleView.bind(this);

  }

  componentDidMount() {
    this.fetchSingleView();
  }

  fetchSingleView = () => {
    const id = this.props.match.params.id;
    fetch(`http://localhost:4000/productslog/${id}`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data !== null) {
          this.setState({
            fullview: data[0],
          });
        }
        console.log(this.state.fullview);
      });
  };

  render() {
    console.log(this.state.fullview.design_name);

    return (
      <div >
        <Container className="fullviewscreen">
            <Row >
            <Col>
          <img className="fullimage"
            width="100%"
            src={this.state.fullview.image}
            alt="Card image cap"
          />
          </Col>
          <Col className="text-center">
          
              <h2>{this.state.fullview.design_name}</h2>
              <div className="productinfofull">
              <br/>Type: {this.state.fullview.product_description}
              <br/>Color: {this.state.fullview.color}
              <br/>Size: {this.state.fullview.size}
              <br/>Price: ${this.state.fullview.price}
            </div>
          </Col>
          </Row>
          </Container>

        

      </div>
    );
  }
}

export default withRouter(FullProductView);
