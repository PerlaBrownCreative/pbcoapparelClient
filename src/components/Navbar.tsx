import React from "react";
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
import { Link } from "react-router-dom";
import "./Navbarstyle.css";

export interface SitebarProps {
  clearToken: Function;
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
        <nav className="py-2 bg-light border-bottom navbarheader">
          <div className="container d-flex flex-wrap">
            <ul className="nav me-auto">
              <div className="promotop">
                FREE SHIPPING FOR US ORDERS OVER $99!
              </div>
            </ul>
          </div>
        </nav>
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
            </Nav>
            <Button
              classname="logoutbtn"
              onClick={() => {
                this.props.clearToken();
              }}
            >
              Login
            </Button>
            <Button
              classname="logoutbtn"
              onClick={() => {
                this.props.clearToken();
              }}
            >
              Logout
            </Button>
          </Collapse>
        </Navbar>
        <hr className="hrnav" />
        <nav className="py-2 navbarheader2">
          <div className="container d-flex flex-wrap">
            <ul className="nav me-auto">
              <li className="nav-item">
                <a href="#" className="nav-link link-dark px-2 ">
                  Tees
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link link-dark px-2">
                  Hats
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link link-dark px-2">
                  Mugs
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link link-dark px-2">
                  Other
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Sitebar;
