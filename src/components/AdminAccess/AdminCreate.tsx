import React from "react";
import "./AdminCreate.css";

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
      values: [],
      loading: false,
      submitSuccess: false,
      input: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(this.props.token);
    let token = this.props.token
      ? this.props.token
      : localStorage.getItem("token");
    fetch("http://localhost:3000/productslog/create", {
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
        <div className={"col-md-4 form-wrapper "}>
          <h2> Create Post </h2>
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
          <form
            id={"create-post-form"}
            onSubmit={this.handleSubmit}
            noValidate={true}
          >
            <div className="form-group col-md-12">
              <label htmlFor="design_name"> Design Name </label>
              <input
                type="text"
                id="design_name"
                onChange={(e) => this.setState({ design_name: e.target.value })}
                name="design_name"
                className="form-control"
                placeholder=""
              />
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="product_description"> Product Description </label>
              <input
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
              <label htmlFor="color"> Color </label>
              <input
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
              <label htmlFor="image"> Image </label>
              <input
                type="text"
                id="image"
                onChange={(e) => this.setState({ image: e.target.value })}
                name="image"
                className="form-control"
                placeholder=""
              />
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="price"> Price </label>
              <input
                type="text"
                id="price"
                onChange={(e) => this.setState({ price: e.target.value })}
                name="price"
                className="form-control"
                placeholder=""
              />
            </div>
            <div className="form-group col-md-4 pull-right">
              <button className="btn btn-success" type="submit">
                Create Product
              </button>
              {loading && <span className="fa fa-circle-o-notch fa-spin" />}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AdminCreate;
