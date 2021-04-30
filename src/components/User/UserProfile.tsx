import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  Row,
} from "reactstrap";
import "./User.css";
import { IProductlogResponse } from "../AdminAccess/interfaces";
import UserProfileDisplay from "./UserProfileDisplay"


export interface UserProfileProps {
  token: string;
  username: string;
  fetchShippinglogs: Function;
}

export interface UserProfileState {
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  mobile_number: string;
  image: string;
  step: number;
  loading: boolean;
  submitSuccess: boolean;
  input: string;

  // productslogs: IProductlogResponse[];



}

class UserProfile extends React.Component<UserProfileProps, UserProfileState> {
  constructor(props: UserProfileProps) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      address: "",
      city: "",
      state: "",
      zip_code: "",
      mobile_number: "",
      image: "",
      step: 0,
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
    fetch("http://localhost:4000/shipping/create", {
      method: "POST",
      body: JSON.stringify({
        shipping: {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          address: this.state.address,
          city: this.state.city,
          state: this.state.state,
          zip_code: this.state.zip_code,
          mobile_number: this.state.mobile_number,
          image: this.state.image
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
          first_name: "",
          last_name: "",
          address: "",
          city: "",
          state: "",
          zip_code: "",
          mobile_number: "",
          image: "",
        });
  this.props.fetchShippinglogs();      
})
      .catch((err) => console.log(err));
  };

  

  render() {
    const { submitSuccess, loading } = this.state;

    return (
      <div className="outerProfile">
        <p className="userProfileHeader">User Profile</p>
        

        <Form onSubmit={this.handleSubmit} className="widthofForm">
        {!submitSuccess && (
            <div className="alert alert-info text-center" role="alert">
              Fill the form below to create your profile! 
            </div>
          )}
          {submitSuccess && (
            <div className="alert alert-info text-center" role="alert">
              The form was successfully submitted!
            </div>
          )}
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="first_name">First Name</Label>
                <Input
                  type="text"
                  name="first_name"
                  value={this.state.first_name}
                  placeholder=""
                  onChange={(e) =>
                    this.setState({ first_name: e.target.value })
                  }
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="last_name">Last Name</Label>
                <Input type="text" 
                value={this.state.last_name}
                name="last_name" placeholder="" 
                onChange={(e) => this.setState({ last_name: e.target.value })}/>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="address">Address</Label>
            <Input
              type="text"
              name="address"
              id="address"
              value={this.state.address}
              placeholder="1234 Main St"
              onChange={(e) => this.setState({ address: e.target.value })}
            />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input type="text" 
                value={this.state.city}
                name="city" id="exampleCity" 
                onChange={(e) => this.setState({ city: e.target.value })}/>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">State</Label>
                <Input type="text" 
                value={this.state.state}
                name="state" id="exampleState" 
                onChange={(e) => this.setState({ state: e.target.value })}/>
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleZip">Zip</Label>
                <Input type="text" 
                value={this.state.zip_code}
                name="zip" id="exampleZip" 
                onChange={(e) => this.setState({ zip_code: e.target.value })}/>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
          <Col md={6}>
              <FormGroup>
                <Label for="mobile_number">Phone Number</Label>
                <Input type="text" 
                value={this.state.mobile_number}
                name="mobile_number" placeholder="" 
                onChange={(e) => this.setState({ mobile_number: e.target.value })}/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
              <Label htmlFor="image">
                Upload Profile Picture
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
              </FormGroup>
            </Col>
            
          </Row>

          <Button type="submit">Submit</Button>
          {loading && <span className="fa fa-circle-o-notch fa-spin" />}
        </Form>
        
      </div>
      
    );
  }
}

export default UserProfile;
