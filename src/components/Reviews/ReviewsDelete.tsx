import React from "react";
import { Table, Col, Row, Container, Button } from "reactstrap";
import "../User/User.css";

export interface ReviewsDeleteProps {
  token: string;
  fetchReviews: Function;
  reviews: number;
  handleshow: Function;
}

export interface ReviewsDeleteState {}

class ReviewsDelete extends React.Component<
  ReviewsDeleteProps,
  ReviewsDeleteState
> {
  constructor(props: ReviewsDeleteProps) {
    super(props);
    this.state = {};
    this.deleteReview = this.deleteReview.bind(this);
  }

  deleteReview = () => {
    let token = this.props.token
      ? this.props.token
      : localStorage.getItem("token");
    fetch(`http://localhost:4000/reviews/delete/${this.props.reviews}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token ? token : "",
      }),
    }).then(() => {
      this.props.fetchReviews();
       this.props.handleshow();
    });
  };

  render() {
    console.log(this.props.reviews)
    return (
      <div>
        <Button
          className="deleteButton1"
          onClick={() => {
            this.deleteReview();
          }}
        >
          Delete
        </Button>
      </div>
    );
  }
}

export default ReviewsDelete;
