import React from "react";
import { Jumbotron, Navbar, Container, NavbarBrand } from "reactstrap";

export interface FooterProps {}

export interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
  constructor(props: FooterProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar color="dark" className="footerBottom">
          <p>PB + Co. Apparel</p>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
