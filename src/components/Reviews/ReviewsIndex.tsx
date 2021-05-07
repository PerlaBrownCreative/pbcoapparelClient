import React from "react";
import { IReviewsResponse } from "../AdminAccess/interfaces";
import ReviewsCreate from "../Reviews/ReviewsCreate";
import ReviewsDisplay from "../Reviews/ReviewsDisplay";

export interface ReviewsIndexProps {
  token: string;
  username: string;
}

export interface ReviewsIndexState {
  reviews: IReviewsResponse[];
  show: boolean;
}

class ReviewsIndex extends React.Component<
  ReviewsIndexProps,
  ReviewsIndexState
> {
  constructor(props: ReviewsIndexProps) {
    super(props);
    this.state = {
      reviews: [],
      show: true,
    };
    this.fetchReviews = this.fetchReviews.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews = () => {
    let token = this.props.token
      ? this.props.token
      : localStorage.getItem("token");
    fetch("http://localhost:4000/reviews/", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token ? token : "",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          reviews: data,
        });
      });
  };

  protectedUserView = () => {
    return localStorage.getItem("token") ? (
      <ReviewsCreate
          fetchReviews={this.fetchReviews}
          token={this.props.token}
          username={this.props.username}
        />
    ) : null;
  };

  handleShow(){
    this.setState({show: !this.state.show})
  }


  render() {
    return (
      <div>

        
        {this.protectedUserView()}
        
        <ReviewsDisplay
          reviews={this.state.reviews}
          fetchReviews={this.fetchReviews}
          token={this.props.token}
          username={this.props.username}
        />
      </div>
    );
  }
}

export default ReviewsIndex;
