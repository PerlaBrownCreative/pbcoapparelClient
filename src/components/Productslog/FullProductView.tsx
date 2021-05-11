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
import ImageShadow from 'react-image-shadow';
import 'react-image-shadow/assets/index.css';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";



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
import APIURL from '../../helpers/environment';


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
    fetch(`${APIURL}/productslog/${id}`, {
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
            <Col className="text-center">
              <div className="fullshirtimage">
          <ImageShadow  
          className="fullshirt"
            width={900}
            src={this.state.fullview.image}
            alt="Card image cap"
          /></div>
          
          
              <div className="titleName"><h2>{this.state.fullview.design_name}</h2></div>
              <div className="productinfofull">
              <br/><h5><b>Type:</b> {this.state.fullview.product_description} | <b>Color:</b> {this.state.fullview.color} | <b>Size:</b> {this.state.fullview.size}</h5>
              <hr className="fullhr"/>
              <h2><b>Price:</b> ${this.state.fullview.price}</h2>
            </div>
          </Col>
          </Row>
          <div className="backtostorebtn"><Link to={"/"}> <FaAngleLeft/><i>Back to store</i></Link></div>
          
         
          </Container>

        

      </div>
    );
  }
}

export default withRouter(FullProductView);
