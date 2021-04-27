import React from "react";
import AdminCreate from "./AdminCreate";
import AdminTable from "./AdminTable";
import { IProductlogResponse } from "./interfaces";
import AdminDeleteProduct from "./AdminDeleteProduct";

export interface AdminIndexProps {
  token: string;
  username: string;
  role: string;
}

export interface AdminIndexState {
  productslogs: IProductlogResponse[];
}

class AdminIndex extends React.Component<AdminIndexProps, AdminIndexState> {
  constructor(props: AdminIndexProps) {
    super(props);
    this.state = {
      productslogs: [],
    };
    this.fetchProductslogs = this.fetchProductslogs.bind(this);
  }

  componentDidMount() {
    this.fetchProductslogs();
  }

  fetchProductslogs = () => {
    let token = this.props.token
      ? this.props.token
      : localStorage.getItem("token");
    fetch("http://localhost:4000/productslog/", {
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
          productslogs: data,
        });
      });
  };

  render() {
    return (
      <div className="rowC">
        <AdminCreate
          token={this.props.token}
          fetchProductslogs={this.fetchProductslogs}
        />
        <AdminTable
          productslogs={this.state.productslogs}
          fetchProductslogs={this.fetchProductslogs}
          token={this.props.token}
        />
      </div>
    );
  }
}

export default AdminIndex;
