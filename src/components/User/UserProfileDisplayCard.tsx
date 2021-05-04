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
  shippinglog: IShippingResponse;
  username: string;
  handleshow: Function;
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


  protectedUserViewProfile = () => {
    return this.props.shippinglog !== null && this.props.shippinglog.address !== "" ? (
        <Card className="UserDisplay">
        <CardBody>
          <CardTitle tag="h4" className="text-center">
            {this.props.shippinglog.first_name} {this.props.shippinglog.last_name}
          </CardTitle>
          <CardSubtitle tag="h5" className="text-center subtitleUser">
            "{this.displayName()}"
          </CardSubtitle>
        </CardBody>
        <img
          className="photoProfile"
          src={this.props.shippinglog.image}
          style={{ width: "100px" }}
        ></img>
        <CardBody className="text-center">
          <div className="header5">Address:</div>
          <CardText>
            {this.props.shippinglog.address}
            <br />
            {this.props.shippinglog.city}, {this.props.shippinglog.state}, {this.props.shippinglog.zip_code}
          </CardText>
          <div className="header5">Mobile Number:</div>
          <CardText>{this.props.shippinglog.mobile_number}</CardText>
       <div className="buttonsuser">
       <UserProfileUpdate
        shippinglog={this.props.shippinglog}
        token={this.props.token}
        fetchShippinglogs={this.props.fetchShippinglogs}
      />
      <UserDeleteShipping
        shippinglog={this.props.shippinglog.id}
        token={this.props.token}
        fetchShippinglogs={this.props.fetchShippinglogs}
        handleshow={this.props.handleshow}

      />
      
      </div>
      </CardBody>
      </Card>
     
    ) : null;
  };





  render() {
    return (
    <div>
    {this.protectedUserViewProfile()}
  </div>
    )
  }
}

export default UserProfileDisplayCard;
