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

export interface UserProfileProps {
  token: string;
  username: string;
}

export interface UserProfileState {
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  mobile_number: string;
  step: number;
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
      step: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
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
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="outerProfile">
        <p className="userProfileHeader">User Profile</p>

        <Form onSubmit={this.handleSubmit} className="widthofForm">
          <div>Circle</div>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="first_name">First Name</Label>
                <Input
                  type="text"
                  name="first_name"
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
                <Input type="text" name="last_name" placeholder="" 
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
              placeholder="1234 Main St"
              onChange={(e) => this.setState({ address: e.target.value })}
            />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleAddress2">Address 2</Label>
                <Input
                  type="text"
                  name="address2"
                  id="exampleAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="mobile_number">Phone Number</Label>
                <Input type="text" name="mobile_number" placeholder="" 
                onChange={(e) => this.setState({ mobile_number: e.target.value })}/>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input type="text" name="city" id="exampleCity" 
                onChange={(e) => this.setState({ city: e.target.value })}/>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">State</Label>
                <Input type="text" name="state" id="exampleState" 
                onChange={(e) => this.setState({ state: e.target.value })}/>
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleZip">Zip</Label>
                <Input type="text" name="zip" id="exampleZip" 
                onChange={(e) => this.setState({ zip_code: e.target.value })}/>
              </FormGroup>
            </Col>
          </Row>

          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default UserProfile;
