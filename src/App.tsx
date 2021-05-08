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
import NavbarSearch from "./components/NavbarSearch";
import UserProfile from "./components/User/UserProfile";
import TopPromo from "./components/TopPromo";
import ProductslogFetch1 from "./components/Productslog/ProductslogFetch1";
import ProductsCard from "./components/Productslog/ProductsCard";
import UserProfileDisplay from "./components/User/UserProfileDisplay";
import ProductslogFetch2 from "./components/Productslog/ProductsFetch2";
import FullProductView from "./components/Productslog/FullProductView"
import UserProfileDisplayCard from "./components/User/UserProfileDisplayCard";
import ReviewsIndex from "./components/Reviews/ReviewsIndex"
import ReviewsFetchAllDisplay from "./components/Reviews/ReviewsFetchAllDisplay";
import ReviewsFetchAllIndex from "./components/Reviews/ReviewsFetchAllIndex";
import {IShippingResponse} from "./components/AdminAccess/interfaces"

export interface AppProps {}

export interface AppState {
  // shippinglog: IShippingResponse;

  token: string;
  username: string;
  role: string;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      // shippinglog: {id: 0, mobile_number: "", first_name: "", last_name: "", address: "", city: "", state: "", zip_code: "", image: ""},
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


  // fetchShippinglogs = () => {
  //   let token = this.state.token
  //     ? this.state.token
  //     : localStorage.getItem("token");
  //   fetch("http://localhost:4000/shipping/", {
  //     method: "GET",
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //       Authorization: token ? token : "",
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data !== null){
  //       this.setState({
  //         shippinglog: data,
  //       });}
  //       console.log(this.state.shippinglog)
  //       // console.log(localStorage.setItem("image", JSON.stringify(data[0].image)))
  //     });
  // };

  // componentDidMount() {
  //   this.fetchShippinglogs();
    
  // }
  

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
      <UserProfileDisplay
        token={this.state.token}
        username={this.state.username}
      />
    ) : null;
  };

  protectedUserReview = () => {
    return localStorage.getItem("token") ? (
      <ReviewsIndex
      token={this.state.token}
      username={this.state.username}/>
    ) : null;
  }

  render() {
    return (
      <div>
        <Router>
          <TopPromo />
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
            <Route exact path="/" component={ProductslogFetch2} />
            <Route exact path="/product_view/:id" component={FullProductView} />
            <Route exact path="/store" component={ProductslogFetch2} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/profile" component={() => this.protectedUserView()} />
            <Route exact path="/your_review" component={() => this.protectedUserReview()}  />
            <Route exact path="/reviews" component={() => <ReviewsFetchAllIndex token={this.state.token} username={this.state.username}/> } />



            
          </Switch>

                  

          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
