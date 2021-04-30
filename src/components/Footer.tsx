import React from "react";
import { Jumbotron, Navbar, Container, NavbarBrand } from "reactstrap";
import "./Footer.css"


export interface FooterProps {}

export interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
  constructor(props: FooterProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="jumbotronFooter"
        style={{}}>
          
          <h5 className="copyright">&#169;Perla Brown Creative 2021</h5>

      </div>
    );
  }
}

export default Footer;
