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

  productslogMapper = () => {
    return this.props.shippinglog.map((shippinglog, index) => {
      return (
        <Card className="UserDisplay">
          <CardBody>
            <CardTitle tag="h4" className="text-center">{shippinglog.first_name} {shippinglog.last_name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2">
              {this.props.username}
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
          </CardBody>
          <UserDeleteShipping
            shippinglog={shippinglog.id}
            token={this.props.token}
            fetchShippinglogs={this.props.fetchShippinglogs}
          />
        </Card>
      );
    });
  };

  render() {
    return <div>{this.productslogMapper()}</div>;
  }
}

export default UserProfileDisplayCard;
