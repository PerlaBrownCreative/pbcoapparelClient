import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export interface UserProfileProps {
  token: string;
  username: string;
  role: string;
}

export interface UserProfileState {
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  mobile_number: string;
}

class UserProfile extends React.Component<UserProfileProps, UserProfileState> {
  constructor(props: UserProfileProps) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      address: "",
      city: "",
      state: "",
      zip_code: "",
      mobile_number: "",
    };
  }
  // handleSubmit = (event: React.FormEvent) => {
  //     event.preventDefault();
  //     console.log(this.props.token);
  //     let token = this.props.token
  //       ? this.props.token
  //       : localStorage.getItem("token");
  //     fetch("http://localhost:4000/productslog/create", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         productslog: {
  //           design_name: this.state.design_name,
  //           product_description: this.state.product_description,
  //           color: this.state.color,
  //           size: this.state.size,
  //           image: this.state.image,
  //           price: this.state.price,
  //         },
  //       }),
  //       headers: new Headers({
  //         "Content-Type": "application/json",
  //         Authorization: token ? token : "",
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         this.setState({
  //           design_name: "",
  //           product_description: "",
  //           color: "",
  //           size: "",
  //           image: "",
  //           price: "",
  //         });
  //         this.props.fetchProductslogs();
  //       })
  //       .catch((err) => console.log(err));
  //   };

  render() {
    return (
      <form>
        <TextField id="standard-basic" label="Standard" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
    );
  }
}

export default UserProfile;
