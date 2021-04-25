import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

import {
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

  render() {
    return (
      <div>
        <div>FREE SHIPPING FOR US ORDERS OVER $99!</div>

        <Navbar className="navbar1" light expand="md">
          <NavbarBrand href="/" className="navbarbrandnav">
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
                  right: "120px",
                }}
                size="25px"
                color="grey"
              />
            </Nav>
          </Collapse>
        </Navbar>

        <Navbar color="light" light expand="md">
          {/* <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar> */}
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/store">
                <NavLink>Store</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">
                <NavLink>Contact</NavLink>
              </Link>
            </NavItem>
            <Auth
              updateToken={this.props.updateToken}
              setUsername={this.props.setUsername}
              setRole={this.props.setRole}
            />
            <Button
              classname="logoutbtn"
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
