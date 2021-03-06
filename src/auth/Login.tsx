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
import "./Auth.css";
import APIURL from '../helpers/environment';

const Regex = RegExp(
  /^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i
);

interface LoginProps {
  updateToken: Function;
  setUsername: Function;
  setRole: Function;
  handleModal: Function;
}

interface LoginState {
  username: string;
  password: string;
  role: string;

  errors: {
    username: string;
    password: string;
    role: string;
  };
}

export class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    const initialState = {
      username: "",
      password: "",
      role: "",

      errors: {
        username: "",
        password: "",
        role: "",
      },
    };
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "username":
        errors.username =
          value.length < 5 ? "Username must be 5 characters long!" : "";
        break;
      case "password":
        errors.password =
          value.length < 5 ? "Password must be five characters long!" : "";
        break;
      default:
        break;
    }
    this.setState(Object.assign(this.state, { errors, [name]: value }));
    console.log(this.state.errors);
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    let validity = true;

    Object.values(this.state.errors).forEach(
      (val) => val.length > 0 && (validity = false)
    );

    if (this.state.username === "") {
      validity = false;
    }
    if (validity === true) {
      console.log("Registering can be done");

      let url = `${APIURL}/user/login`;
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          user: {
            username: this.state.username,
            password: this.state.password,
            role: this.state.role,
          },
        }),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log(data.sessionToken);
          let dataUser = data;
          if (dataUser === undefined) {
            alert("You need to signup.");
            return;
          } else {
            alert("You have signed up");
          }
          this.props.updateToken(data.sessionToken);
          this.props.setUsername(data.user.username);
          this.props.setRole(data.user.role);
          let checkToken = data.sessionToken;
          // this.props.handleModal();

          if (checkToken === undefined) {
            alert("Please provide info to login");
            return;
          } else {
            alert("You have logged in!");
          }
        });
    } else {
      alert("Please ensure everything is correct");
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="wrapper">
        <h2 className="headertitle">Login</h2>
        <Form onSubmit={this.handleSubmit} noValidate>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input type="text" name="username" onChange={this.handleChange} />
            {errors.username.length > 0 && (
              <span style={{ color: "red" }}>{errors.username}</span>
            )}
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder=""
              onChange={this.handleChange}
            />
            {errors.password.length > 0 && (
              <span style={{ color: "red" }}>{errors.password}</span>
            )}
          </FormGroup>

          <div className="submit">
            <Button className="loginoroutbutton">Login</Button>
          </div>
        </Form>
      </div>
    );
  }
}
