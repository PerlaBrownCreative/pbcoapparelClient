import React from 'react';
import { Jumbotron } from "reactstrap";
import "./Header.css"


export interface HeaderProps {
    
}
 
const Header: React.SFC<HeaderProps> = () => {
    return (
      <Jumbotron
        className="jumbotron"
        style={{}}
      ></Jumbotron>
      
      
    );
}
 
export default Header;