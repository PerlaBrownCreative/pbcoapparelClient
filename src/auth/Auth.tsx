import React from 'react';
import { Signup } from "./Signup";
import { Login } from "./Login";
import "./Auth.css";

export interface AuthProps {
    updateToken: Function,

}
 
export interface AuthState {
    // showLogin: Boolean,
}
 
class Auth extends React.Component<AuthProps, AuthState> {
    constructor(props: AuthProps) {
        super(props);
        this.state = {
            // showLogin: true
        };
        // this.handleToggle = this.handleToggle.bind(this);
    }

    // handleToggle = (event: any) => {
    //     event.preventDefault();
    //     this.setState({showLogin: !this.state.showLogin})
    // }
    
render() { 
        return (
            <div>
               
                  <Signup updateToken={this.props.updateToken} />  
              
                  <Login updateToken={this.props.updateToken} />      
                
                
                {/* <div>
        {this.state.showLogin ? (
         
                        
                        <button className="Authbutton" onClick={this.handleToggle}>
            Login
          </button>
        ) : (
          <button  className="Authbutton" onClick={this.handleToggle}>
                                Signup
                            </button>
                            )}
                </div> */}
                

            </div>
         );
    }
}
 
export default Auth;