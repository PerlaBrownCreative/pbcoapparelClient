import React from "react";
import Sitebar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import AdminIndex from "./AdminAccess/AdminIndex";
import ProductslogCards from "./Productslog/ProductslogFetch";

export interface HomepageProps {
  clearToken: () => void;
  token: string;
}

export interface HomepageState {}

class Homepage extends React.Component<HomepageProps, HomepageState> {
  constructor(props: HomepageProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Sitebar clearToken={this.props.clearToken} />
        <Header />
        <AdminIndex token={this.props.token} />
        <ProductslogCards />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
