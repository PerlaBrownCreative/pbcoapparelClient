import * as React from "react";
import { Table, Col, Row, Container, Button } from "reactstrap";
import AdminDeleteProduct from "./AdminDeleteProduct";
import AdminUpdateProduct from "./AdminUpdateProduct";
import { IProductlogResponse } from "./interfaces";

export interface AdminTableProps {
  token: string;
  fetchProductslogs: Function;
  productslogs: IProductlogResponse[];
}

export interface AdminTableState {
  updateActive: Boolean;
  ProductslogToUpdate: {};
}

class AdminTable extends React.Component<AdminTableProps, AdminTableState> {
  constructor(props: AdminTableProps) {
    super(props);
    this.state = {
      updateActive: false,
      ProductslogToUpdate: {},
    };
  }

  updateOn = () => {
    this.setState({ updateActive: true });
  };

  updateOff = () => {
    this.setState({ updateActive: false });
  };

  productslogMapper = () => {
    return this.props.productslogs.map((productlog, index) => {
      console.log(productlog.id);
      return (
        <tr key={index}>
          <th className="id" scope="row">
            {productlog.id}
          </th>

          <td>{productlog.design_name}</td>
          <td>{productlog.product_description}</td>
          <td>{productlog.color}</td>
          <td>{productlog.size}</td>
          <td>{productlog.image}</td>
          <td>{productlog.price}</td>
          <td>
            <AdminUpdateProduct
              productlog={productlog}
              token={this.props.token}
              fetchProductslogs={this.props.fetchProductslogs}
            />
            <AdminDeleteProduct
              productlog={productlog.id}
              token={this.props.token}
              fetchProductslogs={this.props.fetchProductslogs}
            />
          </td>
        </tr>
      );
    });
  };

  render() {
    console.log(this.props.productslogs);
    return (
      <div>
        <Container>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Design Name</th>
                <th>Product Description</th>
                <th>Color</th>
                <th>Size</th>
                <th>Image</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>{this.productslogMapper()}</tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default AdminTable;