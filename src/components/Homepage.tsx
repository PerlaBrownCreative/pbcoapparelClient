import React from "react";
import Sitebar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import AdminIndex from "./AdminAccess/AdminIndex";
import ProductslogCards from "./Productslog/ProductslogFetch";
import Auth from "../auth/Auth";

export interface HomepageProps {
  clearToken: () => void;
  token: string;
  updateToken: Function;
}

export interface HomepageState {}

class Homepage extends React.Component<HomepageProps, HomepageState> {
  constructor(props: HomepageProps) {
    super(props);
    this.state = {};
  }

  // protectedViews = () => {
  //   return localStorage.getItem("token") ? (
  //     <AdminIndex token={this.props.token} clearToken={this.props.clearToken} />
  //   ) : (
  //     <Auth updateToken={this.props.updateToken} />
  //   );
  // };

  render() {
    return (
      <div>
        {/* <AdminIndex token={this.state.token} /> */}
        <ProductslogCards token={this.props.token} />
      </div>
    );
  }
}

export default Homepage;
