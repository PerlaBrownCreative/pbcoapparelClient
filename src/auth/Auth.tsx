import React from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import "./Auth.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import AdminIndex from "../components/AdminAccess/AdminIndex";

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
        <Button onClick={this.handleModal}>Login or Signup</Button>
        <Modal isOpen={!this.state.isOpen}>
          <ModalBody>
            <div>
              {this.state.showLogin ? (
                <Signup
                  updateToken={this.props.updateToken}
                  setUsername={this.props.setUsername}
                  setRole={this.props.setRole}
                />
              ) : (
                <Login
                  updateToken={this.props.updateToken}
                  setUsername={this.props.setUsername}
                  setRole={this.props.setRole}
                />
              )}
            </div>
            <div>
              {this.state.showLogin ? (
                <button className="Authbutton" onClick={this.handleToggle}>
                  Login
                </button>
              ) : (
                <button className="Authbutton" onClick={this.handleToggle}>
                  Signup
                </button>
              )}
            </div>{" "}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.handleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Auth;
