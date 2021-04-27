import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AdminIndex from "./AdminAccess/AdminIndex";
import ProductslogCards from "./Productslog/ProductslogFetch";
import Auth from "../auth/Auth";
import ProductsCard from "./Productslog/ProductsCard";


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

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Homepage;
