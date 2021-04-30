import React from 'react'
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';
  import "./User.css";
  import { IShippingResponse } from "../AdminAccess/interfaces";
  import UserProfileDisplayCard from "../User/UserProfileDisplayCard"



export interface UserProfileDisplayProps {
    token: string;
  username: string;
    
}
 
export interface UserProfileDisplayState {
    shippinglog: IShippingResponse[];
}
 
class UserProfileDisplay extends React.Component<UserProfileDisplayProps, UserProfileDisplayState> {
    constructor(props: UserProfileDisplayProps) {
        super(props);
        this.state = {
            shippinglog: [],
            
        };
        this.fetchShippinglogs = this.fetchShippinglogs.bind(this);

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
          });
      };

    render() { 
        return ( 
            <div>
                <UserProfileDisplayCard shippinglog={this.state.shippinglog} token={this.props.token} fetchShippinglogs={this.fetchShippinglogs} username={this.props.username}/>
    </div>
         );
    }
}
 
export default UserProfileDisplay;