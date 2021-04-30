import * as React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Alert,
} from "reactstrap";
import { IProductlogResponse } from "./interfaces";
import "./AdminTable.css";

export interface AdminUpdateProductProps {
  token: string;
  fetchProductslogs: Function;
  productlog: IProductlogResponse;
}

export interface AdminUpdateProductState {
  editDesign_Name: string;
  editProduct_Description: string;
  editColor: string;
  editSize: string;
  editImage: string;
  editPrice: string;
  editAmount: number;
  loading: Boolean;
  isOpen: Boolean;
}

class AdminUpdateProduct extends React.Component<
  AdminUpdateProductProps,
  AdminUpdateProductState
> {
  constructor(props: AdminUpdateProductProps) {
    super(props);
    this.state = {
      editDesign_Name: this.props.productlog.design_name,
      editProduct_Description: this.props.productlog.product_description,
      editColor: this.props.productlog.color,
      editSize: this.props.productlog.size,
      editImage: this.props.productlog.image,
      editPrice: this.props.productlog.price,
      editAmount: this.props.productlog.amount,
      loading: false,
      isOpen: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle = (event: any) => {
    event.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  };

  productUpdate = (event: any) => {
    event.preventDefault();
    let token = this.props.token
      ? this.props.token
      : localStorage.getItem("token");
    fetch(
      `http://localhost:4000/productslog/update/${this.props.productlog.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          productslog: {
            design_name: this.state.editDesign_Name,
            product_description: this.state.editProduct_Description,
            color: this.state.editColor,
            size: this.state.editSize,
            image: this.state.editImage,
            price: this.state.editPrice,
            amount: this.state.editAmount,
          },
        }),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: token ? token : "",
        }),
      }
    ).then((data) => {
      this.props.fetchProductslogs();
      this.handleToggle(event);
    });
  };

  uploadNewImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "pbcoApparel");
    this.setState({ loading: !this.state.loading });
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dnesqlk9j/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    this.setState({ editImage: file.secure_url });
    console.log(file.secure_url);
    this.setState({ loading: !this.state.loading });
  };

render() {
    console.log(this.props.productlog);

    return (
      <div>
        <Button onClick={this.handleToggle}>Update</Button>
        <Modal isOpen={!this.state.isOpen}>
          <ModalHeader close={!this.state.isOpen}>Update Product</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.productUpdate}>
              <FormGroup>
                <Label htmlFor="design_name">Edit Design Name:</Label>
                <Input
                  name="design_name"
                  defaultValue={this.props.productlog.design_name}
                  onChange={(e) =>
                    this.setState({ editDesign_Name: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="product_description">
                  Edit Product Description:
                </Label>
                <Input
                  name="product_description"
                  defaultValue={this.props.productlog.product_description}
                  onChange={(e) =>
                    this.setState({ editProduct_Description: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="color">Edit Color:</Label>
                <Input
                  name="color"
                  defaultValue={this.props.productlog.color}
                  onChange={(e) => this.setState({ editColor: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="size">Edit Size:</Label>
                <Input
                  name="size"
                  defaultValue={this.props.productlog.size}
                  onChange={(e) => this.setState({ editSize: e.target.value })}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="image">Edit Image:</Label>
                <Input type="file" name="file" onChange={this.uploadNewImage} />
                {this.state.loading ? (
                  <h3>Loading...</h3>
                ) : (
                  <img
                    src={`${this.state.editImage}`}
                    style={{ width: "100px" }}
                  />
                )}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="price">Edit Price:</Label>
                <Input
                  name="price"
                  defaultValue={this.props.productlog.price}
                  onChange={(e) => this.setState({ editPrice: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="amount">Edit Amount:</Label>
                <Input
                  name="amount"
                  defaultValue={this.props.productlog.amount}
                  onChange={(e) => this.setState({ editAmount: +e.target.value })}
                />
              </FormGroup>
              <Button
                className="modaleditbtn"
                type="submit"
                onClick={this.handleToggle}
              >
                Close Without Editing
              </Button>
              <Button
                className="modaleditbtn1"
                type="submit"
                onClick={(event) => {
                  this.productUpdate(event);
                }}
              >
                Update the Product!
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default AdminUpdateProduct;
