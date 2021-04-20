import React from "react";
import { Jumbotron } from "reactstrap";

export interface FooterProps {}

export interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
  constructor(props: FooterProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <div></div>;
  }
}

export default Footer;
