import React from 'react';
import { Jumbotron } from "reactstrap";
import "./Header.css"


export interface HeaderProps {
    
}
 
const Header: React.SFC<HeaderProps> = () => {
    return (
        <div className="container">
      <Jumbotron
        className="jumbotron"
        style={{}}
      ></Jumbotron>
      
      
        </div>
    );
}
 
export default Header;