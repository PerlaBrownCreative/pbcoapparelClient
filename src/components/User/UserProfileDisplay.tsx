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
import UserProfileDisplayCard from "./UserProfileDisplayCard";
import UserProfile from "./UserProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export interface UserProfileDisplayProps {
  token: string;
  username: string;

}

export interface UserProfileDisplayState {
  shippinglog: IShippingResponse;
  show: boolean,

}

class UserProfileDisplay extends React.Component<
  UserProfileDisplayProps,
  UserProfileDisplayState
> {
  constructor(props: UserProfileDisplayProps) {
    super(props);
    this.state = {
      shippinglog: {id: 0, mobile_number: "", first_name: "", last_name: "", address: "", city: "", state: "", zip_code: "", image: ""},
      show: true,
    };
    this.fetchShippinglogs = this.fetchShippinglogs.bind(this);
    // this.changeViews = this.changeViews.bind(this);
    this.handleshow = this.handleshow.bind(this)
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
        if (data !== null){
        this.setState({
          shippinglog: data,
          show: false,
        });}
        console.log(this.state.shippinglog)
        // localStorage.setItem("address", JSON.stringify(data[0].address))
      });
  };

handleshow(){
    this.setState({show: !this.state.show})
}



  render() {
    return (
      <div>


        { this.state.show ? <UserProfile
          token={this.props.token}
          fetchShippinglogs={this.fetchShippinglogs}
          username={this.props.username}
          handleshow={this.handleshow}
        /> :
        <UserProfileDisplayCard
          shippinglog={this.state.shippinglog}
          token={this.props.token}
          fetchShippinglogs={this.fetchShippinglogs}
          username={this.props.username}
          handleshow={this.handleshow}

        />}



       
      </div>
    );
  }
}

export default UserProfileDisplay;
