import React from "react";
import "./App.css";
import Auth from "./auth/Auth";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import AdminIndex from "./components/AdminAccess/AdminIndex";
import ProductslogCards from "./components/Productslog/ProductslogFetch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";
import NavbarSearch from "./components/NavbarSearch"
import UserProfile from "./components/User/UserProfile"
import TopPromo from "./components/TopPromo";
import ProductslogFetch1 from "./components/Productslog/ProductslogFetch1"
import ProductsCard from "./components/Productslog/ProductsCard";

export interface AppProps {}

export interface AppState {
  token: string;
  username: string;
  role: string;
  
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      token: "",
      username: "",
      role: "",
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

  

  setUsername = (username: string) => {
    localStorage.setItem("username", username);
    this.setState({ username: username });
  };

  setRole = (role: string) => {
    localStorage.setItem("role", role);
    this.setState({ role: role });
  };

  protectedViews = () => {
    return localStorage.getItem("token") && localStorage.getItem("role") ? (
      <AdminIndex
        token={this.state.token}
        username={this.state.username}
        role={this.state.role}
      />
    ) : null;
  };

  protectedUserView = () => {
    return localStorage.getItem("token") ? (
      <Route exact path="/profile" 
            component={() => (
              <UserProfile 
              token={this.state.token}
              username={this.state.username}
              /> 
              )}
            />
    ) : null;
  };

  render() {
    return (
      <div>
        <Router>
          <TopPromo/>
          <NavbarSearch
          token={this.state.token}
          clearToken={this.clearToken}
          updateToken={this.updateToken}
          setUsername={this.setUsername}
          setRole={this.setRole}
          username={this.state.username}
          />
          
          <Header />
          {this.protectedViews()}
          <Switch>
            <Route
              exact
              path="/"
              component={ProductslogFetch1}
            />

            <Route exact path="/store" component={ProductslogFetch1} />
            <Route exact path="/contact" component={Contact} />
            {this.protectedUserView()}

          </Switch>

          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
