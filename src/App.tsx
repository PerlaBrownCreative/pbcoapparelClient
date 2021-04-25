import React from "react";
import "./App.css";
import Auth from "./auth/Auth";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Sitebar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminIndex from "./components/AdminAccess/AdminIndex";
import ProductslogCards from "./components/Productslog/ProductslogFetch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

  render() {
    return (
      <div>
        {/* {this.protectedViews()} */}
        {/* <Homepage
          token={this.state.token}
          clearToken={this.clearToken}
          updateToken={this.updateToken}
        /> */}
        <Router>
          <Sitebar
            token={this.state.token}
            clearToken={this.clearToken}
            updateToken={this.updateToken}
          />
          <Header />

          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Homepage
                  token={this.state.token}
                  clearToken={this.clearToken}
                  updateToken={this.updateToken}
                />
              )}
            />
            <Route exact path="/store" component={ProductslogCards} />
            <Route exact path="/contact" component={ProductslogCards} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
