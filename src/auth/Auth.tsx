import React from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import AdminIndex from "../components/AdminAccess/AdminIndex";
import "./Auth.css"
import { FaTimes } from "react-icons/fa";


export interface AuthProps {
  updateToken: Function;
  setUsername: Function;
  setRole: Function;
}

export interface AuthState {
  showLogin: Boolean;
  loading: Boolean;
  isOpen: Boolean;
}

class Auth extends React.Component<AuthProps, AuthState> {
  constructor(props: AuthProps) {
    super(props);
    this.state = {
      showLogin: true,
      loading: false,
      isOpen: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal = (event: any) => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleToggle = (event: any) => {
    event.preventDefault();
    this.setState({ showLogin: !this.state.showLogin });
  };

  

  render() {
    return (
      <div>
        <Button className="loginoroutButton" onClick={this.handleModal }>
          Login or Signup
        </Button>
        <Modal isOpen={!this.state.isOpen}>
          <ModalBody>
            <div>
              {this.state.showLogin ? (
                <Signup
                  updateToken={this.props.updateToken}
                  setUsername={this.props.setUsername}
                  setRole={this.props.setRole}
                  handleModal={this.handleModal}
                />
              ) : (
                <Login
                  updateToken={this.props.updateToken}
                  setUsername={this.props.setUsername}
                  setRole={this.props.setRole}
                  handleModal={this.handleModal}
                />
              )}
            </div>
            <div className="authbutton">
              {/* Already a member? */}
              {this.state.showLogin ? (
                `Already a member?`
              ) : (
                `Not a member yet?`
              )}
            </div>{" "}
            <div className="authbutton">
              {/* Already a member? */}
              {this.state.showLogin ? (
                <Button className="Authbutton bg-transparent border-0"  onClick={this.handleToggle}>
                  Login
                </Button>
              ) : (
                <Button className="Authbutton bg-transparent border-0"  onClick={this.handleToggle}>
                  Signup
                </Button>
              )}
            </div>{" "}
          </ModalBody>
          <ModalFooter>
            <Button className="clickoutbtn" onClick={this.handleModal}>
            <FaTimes/>
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Auth;
