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
// import { IProductlogResponse } from "./Interfaces";

export interface AdminUpdateProductProps {
  token: string;
  fetchProductslogs: Function;
  productlog: any;
}

export interface AdminUpdateProductState {
  editDesign_Name: String;
  editProduct_Description: String;
  editColor: String;
  editSize: String;
  editImage: String;
  editPrice: String;
  loading: Boolean;
}

class AdminUpdateProduct extends React.Component<
  AdminUpdateProductProps,
  AdminUpdateProductState
> {
  constructor(props: AdminUpdateProductProps) {
    super(props);
    this.state = {
      editDesign_Name: "",
      editProduct_Description: "",
      editColor: "",
      editSize: "",
      editImage: "",
      editPrice: "",
      loading: false,
    };
  }

  productUpdate = (event: any) => {
    event.preventDefault();
    // fetch(
    //   `http://localhost:3000/productslog/update/${this.props.productslog}`,
    //   {
    //     method: "PUT",
    //     body: JSON.stringify({
    //       productslog: {
    //         design_name: this.state.editDesign_Name,
    //         product_description: this.state.editProduct_Description,
    //         color: this.state.editColor,
    //         size: this.state.editSize,
    //         image: this.state.editImage,
    //         price: this.state.editPrice,
    //       },
    //     }),
    //     headers: new Headers({
    //       "Content-Type": "application/json",
    //       Authorization: this.props.token,
    //     }),
    //   }
    // ).then((data) => {
    //   this.setState({
    //     editDesign_Name: "",
    //     editProduct_Description: "",
    //     editColor: "",
    //     editSize: "",
    //     editImage: "",
    //     editPrice: "",
    //   });
    //   this.props.fetchProductslogs();
    //   //   this.updateOff();
    // });
  };

  render() {
    console.log(this.props.productlog);

    return (
      <div>
        <Modal isOpen={true}>
          <ModalHeader closeButton>Update Product</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.productUpdate}>
              <FormGroup>
                <Label htmlFor="design_name">Edit Design Name:</Label>
                <Input
                  name="design_name"
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
                  onChange={(e) =>
                    this.setState({ editDesign_Name: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="color">Edit Color:</Label>
                <Input
                  name="color"
                  onChange={(e) =>
                    this.setState({ editDesign_Name: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="size">Edit Size:</Label>
                <Input
                  name="size"
                  onChange={(e) =>
                    this.setState({ editDesign_Name: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="image">Edit Image:</Label>
                <Input
                  name="image"
                  onChange={(e) =>
                    this.setState({ editDesign_Name: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="price">Edit Price:</Label>
                <Input
                  name="price"
                  onChange={(e) =>
                    this.setState({ editDesign_Name: e.target.value })
                  }
                />
              </FormGroup>
              <Button className="modaleditbtn" type="submit">
                Close Without Editing
              </Button>
              <Button className="modaleditbtn1" type="submit">
                Update the Diet Log!
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default AdminUpdateProduct;
