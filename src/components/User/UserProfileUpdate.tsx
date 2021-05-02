import React from "react";
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
import { IShippingResponse } from "../AdminAccess/interfaces";

export interface UserProfileUpdateProps {
  token: string;
  fetchShippinglogs: Function;
  shippinglog: IShippingResponse;
}

export interface UserProfileUpdateState {
  editFirst_Name: string;
  editLast_Name: string;
  editAddress: string;
  editCity: string;
  editState: string;
  editZip_Code: string;
  editMobile_Number: string;
  editImage: string;
  loading: Boolean;
  isOpen: Boolean;
}

class UserProfileUpdate extends React.Component<
  UserProfileUpdateProps,
  UserProfileUpdateState
> {
  constructor(props: UserProfileUpdateProps) {
    super(props);
    this.state = {
      editFirst_Name: this.props.shippinglog.first_name,
      editLast_Name: this.props.shippinglog.last_name,
      editAddress: this.props.shippinglog.address,
      editCity: this.props.shippinglog.city,
      editState: this.props.shippinglog.state,
      editZip_Code: this.props.shippinglog.zip_code,
      editMobile_Number: this.props.shippinglog.mobile_number,
      editImage: this.props.shippinglog.image,
      loading: false,
      isOpen: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle = (event: any) => {
    event.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  };

  profileUpdate = (event: any) => {
    event.preventDefault();
    let token = this.props.token
      ? this.props.token
      : localStorage.getItem("token");
      console.log(this.props.shippinglog.id)
    fetch(
      `http://localhost:4000/shipping/update/${this.props.shippinglog.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          shipping: {
            first_name: this.state.editFirst_Name,
            last_name: this.state.editLast_Name,
            address: this.state.editAddress,
            city: this.state.editCity,
            state: this.state.editState,
            zip_code: this.state.editZip_Code,
            mobile_number: this.state.editMobile_Number,
            image: this.state.editImage
          },
        }),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: token ? token : "",
        }),
      }
    ).then((data) => {
      this.props.fetchShippinglogs();
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
    return <div><Button className="updateButton" onClick={this.handleToggle}>Update</Button>
    <Modal isOpen={!this.state.isOpen}>
      <ModalHeader  close={!this.state.isOpen}>Update Profile</ModalHeader>
      <ModalBody>
        <Form onSubmit={this.profileUpdate}>
          <FormGroup>
            <Label htmlFor="first_name">Edit First Name:</Label>
            <Input
              name="first_name"
              defaultValue={this.props.shippinglog.first_name}
              onChange={(e) =>
                this.setState({ editFirst_Name: e.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="last_name">
              Edit Last Name:
            </Label>
            <Input
              name="last_name"
              defaultValue={this.props.shippinglog.last_name}
              onChange={(e) =>
                this.setState({ editLast_Name: e.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="address">Edit Address:</Label>
            <Input
              name="address"
              defaultValue={this.props.shippinglog.address}
              onChange={(e) => this.setState({ editAddress: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="city">Edit City:</Label>
            <Input
              name="city"
              defaultValue={this.props.shippinglog.city}
              onChange={(e) => this.setState({ editCity: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="state">Edit State:</Label>
            <Input
              name="state"
              defaultValue={this.props.shippinglog.state}
              onChange={(e) => this.setState({ editState: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="zip_code">Edit Zip:</Label>
            <Input
              name="zip_code"
              defaultValue={this.props.shippinglog.zip_code}
              onChange={(e) => this.setState({ editZip_Code: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="mobile_number">Edit Phone Number:</Label>
            <Input
              name="mobile_number"
              defaultValue={this.props.shippinglog.mobile_number}
              onChange={(e) => this.setState({ editMobile_Number: e.target.value })}
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
              this.profileUpdate(event);
            }}
          >
            Update your profile!
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  </div>;
  }
}

export default UserProfileUpdate;
