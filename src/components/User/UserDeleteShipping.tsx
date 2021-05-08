import React from 'react'
import { Table, Col, Row, Container, Button } from "reactstrap";
import "./User.css"
import APIURL from '../../helpers/environment'



export interface UserDeleteShippingProps {
    token: string;
    fetchShippinglogs: Function;
    shippinglog: number;
    handleshow: Function;
    
}
 
export interface UserDeleteShippingState {
    
}
 
class UserDeleteShipping extends React.Component<UserDeleteShippingProps, UserDeleteShippingState> {
    constructor(props: UserDeleteShippingProps) {
        super(props);
        this.state = {
            
        };
        this.deleteShippinglog = this.deleteShippinglog.bind(this);

    }

    deleteShippinglog= () => {
        console.log(this.props.shippinglog);
        let token = this.props.token
          ? this.props.token
          : localStorage.getItem("token");
        fetch(`${APIURL}/shipping/delete/${this.props.shippinglog}`, {
          method: "DELETE",
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: token ? token : "",
          }),
        }).then(() => {this.props.fetchShippinglogs()
         this.props.handleshow();
        }
        );

      };


      

    render() { 
        return ( 
            <div>
                <Button className="deleteButton1"
          onClick={() => {
            this.deleteShippinglog();
          }}
        >
          Delete
        </Button>

            </div>
         );
    }
}
 
export default UserDeleteShipping;