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
import "../Navbarstyle.css";
import { Divider } from "@material-ui/core";

export interface UserDropdownProps {
    token: string,
    username: string
}

export interface UserDropdownState {
    dropdownOpen: boolean;
    isOpen: Boolean;
}

class UserDropdown extends React.Component<
  UserDropdownProps,
  UserDropdownState
> {
  constructor(props: UserDropdownProps) {
    super(props);
    this.state = {
        dropdownOpen: false,
        isOpen: false,
    };
    this.handleToggle1 = this.handleToggle1.bind(this);
  }

  handleToggle1 = (event: any) => {
    event.preventDefault();
    this.setState({ dropdownOpen: !this.state.dropdownOpen,});
  };

  displayName = () => {
    return localStorage.getItem("username")
      ? `Hi ${localStorage.getItem("username")}!`
      : null;
  };

  protectedUserIcon = () => {
    return localStorage.getItem("token") ? (
      <FaRegUserCircle
        className="icon profilePic"
        size="33px"
        color="#f9f5f2"
      />
    ) : null;
  };

  render() {
    return (
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.handleToggle1}>
          <DropdownToggle className="outerBoth" caret>
            {this.protectedUserIcon()}
            {this.displayName()}
            <DropdownMenu>
                <DropdownItem>
              <Link to="/profile">Create/Update Profile</Link>
              </DropdownItem>
            </DropdownMenu>
          </DropdownToggle>
        </Dropdown>
    );
  }
}

export default UserDropdown;
