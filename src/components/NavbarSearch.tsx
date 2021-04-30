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
  Dropdown,
} from "reactstrap";
import { Route, Link, Switch } from "react-router-dom";
import "./Navbarstyle.css";
import Auth from "../auth/Auth";
import UserDropdown from "./User/UserDropdown"

export interface SitebarProps {
  clearToken: Function;
  token: string;
  updateToken: Function;
  setUsername: Function;
  setRole: Function;
  username: string;
}

export interface SitebarState {
  isOpened: Boolean;
  dropdownOpen: Boolean;
}

class Sitebar extends React.Component<SitebarProps, SitebarState> {
  constructor(props: SitebarProps) {
    super(props);
    this.state = {
      isOpened: true,
      dropdownOpen: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle = (event: any) => {
    event.preventDefault();
    this.setState({ isOpened: !this.state.isOpened });
  };

  

  // displayName = () => {
  //   return localStorage.getItem("username")
  //     ? `Hi ${localStorage.getItem("username")}!`
  //     : null;
  // };

  // protectedUserIcon = () => {
  //   return localStorage.getItem("token") ? (
  //     <FaRegUserCircle
  //       className="icon profilePic"
  //       size="33px"
  //       color="#f9f5f2"
  //     />
  //   ) : null;
  // };

  render() {
    return (
      <Navbar className="navbar1" expand="md">
        <NavbarBrand href="/" className="navbarBrand">
          PB + Co. Apparel
        </NavbarBrand>
        <NavbarToggler onClick={this.handleToggle} />
        <Collapse isOpen={!this.state.isOpened} navbar>
          <Nav className="navinner">
            <NavItem>
              <Link to="/store">
                <NavLink className="linkcolor">Store</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/store1">
                <NavLink className="linkcolor">Store 1</NavLink>
              </Link>
            </NavItem>
            <NavItem className="linkcolor">
              <Link to="/contact">
                <NavLink className="contactLink linkcolor">Contact</NavLink>
              </Link>
            </NavItem>
            <NavItem className="modalbutton1">
              <Auth
                updateToken={this.props.updateToken}
                setUsername={this.props.setUsername}
                setRole={this.props.setRole}
              />
            </NavItem>
            <NavItem className="modalbutton2">
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
              <UserDropdown token={this.props.token} username={this.props.username}/>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Sitebar;
