import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { IShippingResponse } from "../AdminAccess/interfaces";
import UserDeleteShipping from "./UserDeleteShipping";
import "./User.css";
import UserProfileUpdate from "./UserProfileUpdate";

export interface UserProfileDisplayCardProps {
  token: string;
  fetchShippinglogs: Function;
  shippinglog: IShippingResponse[];
  username: string;
}

export interface UserProfileDisplayCardState {
  updateActive: Boolean;
  ShippinglogToUpdate: {};
}

class UserProfileDisplayCard extends React.Component<
  UserProfileDisplayCardProps,
  UserProfileDisplayCardState
> {
  constructor(props: UserProfileDisplayCardProps) {
    super(props);
    this.state = {
      updateActive: false,
      ShippinglogToUpdate: {},
    };
  }

  updateOn = () => {
    this.setState({ updateActive: true });
  };

  updateOff = () => {
    this.setState({ updateActive: false });
  };

  displayName = () => {
    return localStorage.getItem("username")
      ? `${localStorage.getItem("username")}`
      : null;
  };

  productslogMapper = () => {
    return this.props.shippinglog.map((shippinglog, index) => {
      return (
        <div>
          <Card key={index} className="UserDisplay">
            <CardBody>
              <CardTitle tag="h4" className="text-center">
                {shippinglog.first_name} {shippinglog.last_name}
              </CardTitle>
              <CardSubtitle tag="h5" className="text-center subtitleUser">
                "{this.displayName()}"
              </CardSubtitle>
            </CardBody>
            <img
              className="photoProfile"
              src={shippinglog.image}
              style={{ width: "100px" }}
            ></img>
            <CardBody className="text-center">
              Address:
              <CardText>
                {shippinglog.address}
                <br />
                {shippinglog.city}, {shippinglog.state}, {shippinglog.zip_code}
              </CardText>
              Mobile Number:
              <CardText>{shippinglog.mobile_number}</CardText>
            
          <UserDeleteShipping
            shippinglog={shippinglog.id}
            token={this.props.token}
            fetchShippinglogs={this.props.fetchShippinglogs}
          />
          <UserProfileUpdate
            shippinglog={shippinglog}
            token={this.props.token}
            fetchShippinglogs={this.props.fetchShippinglogs}
          /></CardBody>
          </Card>
        </div>
      );
    });
  };

  render() {
    return <div>{this.productslogMapper()}</div>;
  }
}

export default UserProfileDisplayCard;
