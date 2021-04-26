import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

import {
  Alert,
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Input,
  FormGroup,
  Label,
  Form,
  Row,
  Col,
} from "reactstrap";
import { Route, Link, Switch } from "react-router-dom";
import "./Navbarstyle.css";
import Auth from "../auth/Auth";

export interface SitebarProps {
  clearToken: Function;
  token: string;
  updateToken: Function;
  setUsername: Function;
  setRole: Function;
  username: string;
}

export interface SitebarState {
  isOpen: Boolean;
}

class Sitebar extends React.Component<SitebarProps, SitebarState> {
  constructor(props: SitebarProps) {
    super(props);
    this.state = {
      isOpen: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle = (event: any) => {
    event.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  };

  displayName = () => {
    return localStorage.getItem("token") ? `Hi ${this.props.username}!` : null;
  };

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Alert className="topMessage">
              FREE SHIPPING FOR US ORDERS OVER $99!
            </Alert>
          </Col>
        </Row>

        <Navbar className="navbar1" light expand="md">
          <NavbarBrand href="/" className="logo">
            PB + Co. Apparel
          </NavbarBrand>
          <NavbarToggler onClick={this.handleToggle} />
          <Collapse isOpen={!this.state.isOpen} navbar>
            <Nav className="mr-auto">
              <FormGroup className="navform1">
                <Label for="exampleSearch"></Label>
                <Input
                  type="search"
                  name="search"
                  id="exampleSearch"
                  placeholder="search products"
                />
              </FormGroup>
              <FaRegUserCircle
                className="icon"
                style={{
                  position: "absolute",
                  top: "43px",
                  right: "100px",
                }}
                size="25px"
                color="grey"
              />
              <NavItem>{this.displayName()}</NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Navbar className="bottomNav" light expand="md">
          {/* <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar> */}
          <Nav className="bottomNavText">
            <NavItem>
              <Link to="/store">
                <NavLink className="linkcolor">Store</NavLink>
              </Link>
            </NavItem>
            <NavItem className="linkcolor">
              <Link to="/contact">
                <NavLink className="contactLink linkcolor">Contact</NavLink>
              </Link>
            </NavItem>
            <div className="loginorout">
              <Auth
                updateToken={this.props.updateToken}
                setUsername={this.props.setUsername}
                setRole={this.props.setRole}
              />
            </div>

            <Button
              className="logoutButton"
              onClick={() => {
                this.props.clearToken();
              }}
            >
              Logout
            </Button>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Sitebar;
