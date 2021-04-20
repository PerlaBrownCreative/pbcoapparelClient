import React from "react";
import "./App.css";
import Auth from "./auth/Auth";
import Header from "./components/Header";
import Homepage from "./components/Homepage";

export interface AppProps {}

export interface AppState {
  token: string;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      token: "",
    };
  }

  updateToken = (token: string) => {
    localStorage.setItem("token", token);
    this.setState({ token: token });
  };

  clearToken = () => {
    localStorage.clear();
    this.setState({
      token: "",
    });
  };

  protectedViews = () => {
    return this.state.token ? (
      <Homepage token={this.state.token} clearToken={this.clearToken} />
    ) : (
      <Auth updateToken={this.updateToken} />
    );
  };

  render() {
    return <div>{this.protectedViews()}</div>;
  }
}

export default App;
