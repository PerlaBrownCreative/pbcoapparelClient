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
import { Divider } from "@material-ui/core";

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
    return localStorage.getItem("username") ? `Hi ${localStorage.getItem("username")}!` : null;
  };

  protectedUserIcon = () => {
    return localStorage.getItem("token") ? (
      <FaRegUserCircle className="icon" size="25px" color="grey" />
    ) : null;
  };

  render() {
    return (
      <Navbar className="navbar1" color="dark" expand="md" >
        <NavbarBrand href="/" className="navbarBrand mr-lg-5 barbrand">
          PB + Co. Apparel
        </NavbarBrand>
        <NavbarToggler onClick={this.handleToggle} />
        <Collapse isOpen={!this.state.isOpen} navbar>
          <Nav className="navinner" >
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
            <NavItem>
              <Auth
                updateToken={this.props.updateToken}
                setUsername={this.props.setUsername}
                setRole={this.props.setRole}
              />
            </NavItem>
            <NavItem>
              <Button
                className="logoutButton"
                onClick={() => {
                  this.props.clearToken();
                }}
              >
                Logout
              </Button>
            </NavItem>
            <NavItem>
              <Link to="/profile">
                {this.protectedUserIcon()}
                {this.displayName()}
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Sitebar;
