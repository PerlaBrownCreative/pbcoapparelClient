import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Alert,
} from "reactstrap";
import { IReviewsResponse } from "../AdminAccess/interfaces";

export interface UserProfileUpdateProps {
    token: string;
    fetchReviews: Function;
    reviews: IReviewsResponse;
}

export interface UserProfileUpdateState {
  editRate: number;
  editReview: string;
  loading: Boolean;
  isOpen: Boolean;
}

class UserProfileUpdate extends React.Component<
  UserProfileUpdateProps,
  UserProfileUpdateState
> {
  constructor(props: UserProfileUpdateProps) {
    super(props);
    this.state = {
      editRate: this.props.reviews.rate,
      editReview: this.props.reviews.review,
      loading: false,
      isOpen: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle = (event: any) => {
    event.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  };

  reviewUpdate = (event: any) => {
    event.preventDefault();
    let token = this.props.token
      ? this.props.token
      : localStorage.getItem("token");
      console.log(this.props.reviews.id)
    fetch(
      `http://localhost:4000/reviews/update/${this.props.reviews.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          reviews: {
            rate: this.state.editRate,
            review: this.state.editReview,
            
          },
        }),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: token ? token : "",
        }),
      }
    ).then((data) => {
      this.props.fetchReviews();
      this.handleToggle(event);
    });
  };

  


  render() {
    return <div><Button className="updateButton" onClick={this.handleToggle}>Update</Button>
    <Modal isOpen={!this.state.isOpen}>
      <ModalHeader  close={!this.state.isOpen}>Update Profile</ModalHeader>
      <ModalBody>
        <Form onSubmit={this.reviewUpdate}>
          <FormGroup>
            <Label htmlFor="first_name">Edit First Name:</Label>
            <Input
              name="first_name"
              defaultValue={this.props.reviews.rate}
              onChange={(e) =>
                this.setState({ editRate: +e.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="last_name">
              Edit Last Name:
            </Label>
            <Input
              name="last_name"
              defaultValue={this.props.reviews.review}
              onChange={(e) =>
                this.setState({ editReview: e.target.value })
              }
            />
          </FormGroup>
          
          
          
          <Button
            className="modaleditbtn"
            type="submit"
            onClick={this.handleToggle}
          >
            Close Without Editing
          </Button>
          <Button
            className="modaleditbtn1"
            type="submit"
            onClick={(event) => {
              this.reviewUpdate(event);
            }}
          >
            Update your review!
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  </div>;
  }
}

export default UserProfileUpdate;
