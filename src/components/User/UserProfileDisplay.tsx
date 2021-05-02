import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import "./User.css";
import { IShippingResponse } from "../AdminAccess/interfaces";
import UserProfileDisplayCard from "../User/UserProfileDisplayCard";
import UserProfile from "./UserProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export interface UserProfileDisplayProps {
  token: string;
  username: string;

}

export interface UserProfileDisplayState {
  shippinglog: IShippingResponse[];

}

class UserProfileDisplay extends React.Component<
  UserProfileDisplayProps,
  UserProfileDisplayState
> {
  constructor(props: UserProfileDisplayProps) {
    super(props);
    this.state = {
      shippinglog: [],
    };
    this.fetchShippinglogs = this.fetchShippinglogs.bind(this);
    this.changeViews = this.changeViews.bind(this);
  }

  componentDidMount() {
    this.fetchShippinglogs();
  }

  fetchShippinglogs = () => {
    let token = this.props.token
      ? this.props.token
      : localStorage.getItem("token");
    fetch("http://localhost:4000/shipping/", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token ? token : "",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          shippinglog: data,
        });
        console.log(this.state.shippinglog)
        // localStorage.setItem("address", JSON.stringify(data[0].address))
      });
  };





  changeViews = (e: any) => {
      e.preventDefault();
    return this.state.shippinglog ? (
        <UserProfileDisplayCard
        shippinglog={this.state.shippinglog}
        token={this.props.token}
        fetchShippinglogs={this.fetchShippinglogs}
        username={this.props.username}
      />
    ) : (<UserProfile
    token={this.props.token}
    fetchShippinglogs={this.fetchShippinglogs}
    username={this.props.username}
  /> );
};





  render() {
    return (
      <div>
        <UserProfile
          token={this.props.token}
          fetchShippinglogs={this.fetchShippinglogs}
          username={this.props.username}
        />
        <UserProfileDisplayCard
          shippinglog={this.state.shippinglog}
          token={this.props.token}
          fetchShippinglogs={this.fetchShippinglogs}
          username={this.props.username}
        />



        {this.changeViews}
      </div>
    );
  }
}

export default UserProfileDisplay;
