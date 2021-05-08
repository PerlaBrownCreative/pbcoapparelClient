import React from "react";
import { IReviewsResponse } from "../AdminAccess/interfaces";
import ReviewsCreate from "../Reviews/ReviewsCreate";
import ReviewsDisplay from "../Reviews/ReviewsDisplay";
import ReviewsFetchAll from "../Reviews/ReviewsFetchAll"
import ReviewsFetchAllDisplay from "./ReviewsFetchAllDisplay";
import APIURL from '../../helpers/environment';


export interface ReviewsIndexProps {
    token: string;
  username: string;
}

export interface ReviewsIndexState {
  reviews: IReviewsResponse[];
  
}

class ReviewsIndex extends React.Component<
  ReviewsIndexProps,
  ReviewsIndexState
> {
  constructor(props: ReviewsIndexProps) {
    super(props);
    this.state = {
      reviews: [],
    };
    this.fetchReviews = this.fetchReviews.bind(this);
  }

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews = () => {
    let token = this.props.token
      ? this.props.token
      : localStorage.getItem("token");
    fetch(`${APIURL}/reviews/`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token ? token : "",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data !== null){
        this.setState({
          reviews: data,
        });}
      });
  };




  render() {
      console.log(this.state.reviews)
    return (
      <div>

        <ReviewsFetchAllDisplay 
        reviews={this.state.reviews}
          fetchReviews={this.fetchReviews}
          username={this.props.username}
          token={this.props.token}
          />
        
        
      </div>
    );
  }
}

export default ReviewsIndex;
