import React from "react";
import AdminCreate from "./AdminCreate";
import AdminTable from "./AdminTable";

export interface AdminIndexProps {
  token: string;
}

export interface AdminIndexState {
  productslogs: [];
  updateActive: Boolean;
  productslogsToUpdate: {};
}

class AdminIndex extends React.Component<AdminIndexProps, AdminIndexState> {
  constructor(props: AdminIndexProps) {
    super(props);
    this.state = {
      productslogs: [],
      updateActive: false,
      productslogsToUpdate: {},
    };
  }

  fetchProductslogs = () => {
    fetch("http://localhost:3000/productslog/", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          productslogs: [],
        });
      });
  };

  editUpdateProductslogs = (productslogs: []) => {
    this.setState({ productslogsToUpdate: { productslogs } });
    console.log(productslogs);
  };

  updateOn = () => {
    this.setState({ updateActive: true });
  };

  updateOff = () => {
    this.setState({ updateActive: false });
  };

  componentDidMount() {
    this.fetchProductslogs();
  }

  render() {
    return (
      <div>
        <AdminCreate token={this.props.token} />
        <AdminTable
          productslogs={this.state.productslogs}
          token={this.props.token}
          editUpdateProductslogs={this.editUpdateProductslogs}
          updateOn={this.updateOn}
          fetchProductslogs={this.fetchProductslogs}
        />
      </div>
    );
  }
}

export default AdminIndex;
