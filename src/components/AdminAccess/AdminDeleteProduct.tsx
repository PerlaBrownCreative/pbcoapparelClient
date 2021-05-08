import * as React from "react";
// import { IProductlogResponse } from "./interfaces";
import { Table, Col, Row, Container, Button } from "reactstrap";
import "./AdminCreate.css";
import APIURL from '../../helpers/environment';



export interface AdminDeleteProductProps {
  token: string;
  fetchProductslogs: Function;
  //   productslogs: IProductlogResponse[];
  productlog: number;
}

export interface AdminDeleteProductState {}

class AdminDeleteProduct extends React.Component<
  AdminDeleteProductProps,
  AdminDeleteProductState
> {
  constructor(props: AdminDeleteProductProps) {
    super(props);
    this.state = {};
  }

  deleteProductlog = () => {
    console.log(this.props.productlog);
    let token = this.props.token
      ? this.props.token
      : localStorage.getItem("token");
    fetch(`${APIURL}/productslog/delete/${this.props.productlog}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token ? token : "",
      }),
    }).then(() => this.props.fetchProductslogs());
  };

  render() {
    return (
      <div>
        <Button className="deleteButton"
          onClick={() => {
            this.deleteProductlog();
          }}
        >
          Delete
        </Button>
      </div>
    );
  }
}

export default AdminDeleteProduct;
