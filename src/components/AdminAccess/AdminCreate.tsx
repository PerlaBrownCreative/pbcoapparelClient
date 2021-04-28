import React from "react";
import "./AdminCreate.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
  FormText,
} from "reactstrap";

export interface AdminCreateProps {
  token: string;
  fetchProductslogs: Function;
}

export interface AdminCreateState {
  design_name: string;
  product_description: string;
  color: string;
  size: string;
  image: string;
  price: string;
  amount: number;
  [key: string]: any;
  values: AdminCreateProps[];
  submitSuccess: boolean;
  loading: boolean;
  input: string;
}

class AdminCreate extends React.Component<AdminCreateProps, AdminCreateState> {
  constructor(props: AdminCreateProps) {
    super(props);
    this.state = {
      design_name: "",
      product_description: "",
      color: "",
      size: "",
      image: "",
      price: "",
      amount: 0,
      values: [],
      loading: false,
      submitSuccess: false,
      input: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  uploadImage = async (e) => {
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
    this.setState({ image: file.secure_url });
    console.log(file.secure_url);
    this.setState({ loading: !this.state.loading });
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(this.props.token);
    let token = this.props.token
      ? this.props.token
      : localStorage.getItem("token");
    fetch("http://localhost:4000/productslog/create", {
      method: "POST",
      body: JSON.stringify({
        productslog: {
          design_name: this.state.design_name,
          product_description: this.state.product_description,
          color: this.state.color,
          size: this.state.size,
          image: this.state.image,
          price: this.state.price,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token ? token : "",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          design_name: "",
          product_description: "",
          color: "",
          size: "",
          image: "",
          price: "",
        });
        this.props.fetchProductslogs();
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { submitSuccess, loading } = this.state;
    return (
      <div className="adminform">
        <h4> Create a Product </h4>
          {!submitSuccess && (
            <div className="alert alert-info" role="alert">
              Fill the form below to create a product
            </div>
          )}
          {submitSuccess && (
            <div className="alert alert-info" role="alert">
              The form was successfully submitted!
            </div>
          )}
          <Form
            id={"create-post-form"}
            onSubmit={this.handleSubmit}
            noValidate={true}
          >
            <div className="form-group col-md-12">
              <Label htmlFor="design_name"> Design Name </Label>
              <Input
                type="text"
                id="design_name"
                onChange={(e) => this.setState({ design_name: e.target.value })}
                name="design_name"
                className="form-control"
                placeholder=""
              />
            </div>
            <div className="form-group col-md-12">
              <Label htmlFor="product_description"> Product Description </Label>
              <Input
                type="text"
                id="product_description"
                onChange={(e) =>
                  this.setState({ product_description: e.target.value })
                }
                name="product_description"
                className="form-control"
                placeholder=""
              />
            </div>
            <div className="form-group col-md-12">
              <Label htmlFor="color"> Color </Label>
              <Input
                type="text"
                id="color"
                onChange={(e) => this.setState({ color: e.target.value })}
                name="color"
                className="form-control"
                placeholder=""
              />
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="size"> Size </label>
              <input
                type="text"
                id="size"
                onChange={(e) => this.setState({ size: e.target.value })}
                name="size"
                className="form-control"
                placeholder=""
              />
            </div>

            <div className="form-group col-md-12">
              <Label htmlFor="image">
                <h6>Upload Image:</h6>
              </Label>
              <Input
                type="file"
                name="file"
                className="choosefilebtn"
                onChange={this.uploadImage}
              />
              {loading ? (
                <h3>Loading...</h3>
              ) : (
                <img src={this.state.image} style={{ width: "100px" }} />
              )}
            </div>

            <div className="form-group col-md-12">
              <Label htmlFor="price"> Price </Label>
              <Input
                type="text"
                id="price"
                onChange={(e) => this.setState({ price: e.target.value })}
                name="price"
                className="form-control"
                placeholder=""
              />
            </div>
            <div className="form-group col-md-4 pull-right">
              <Button className="btn1 " type="submit">
                Create Product
              </Button>
              {loading && <span className="fa fa-circle-o-notch fa-spin" />}
            </div>
          </Form>
        </div>
    );
  }
}

export default AdminCreate;
