import React from "react";
import { IReviewsResponse } from "../AdminAccess/interfaces";
import ReviewsCreate from "../Reviews/ReviewsCreate";
import ReviewsDisplay from "../Reviews/ReviewsDisplay";
import APIURL from '../../helpers/environment'


export interface ReviewsIndexProps {
  token: string;
  username: string;
}

export interface ReviewsIndexState {
  reviews: IReviewsResponse;
  show: boolean;
}

class ReviewsIndex extends React.Component<
  ReviewsIndexProps,
  ReviewsIndexState
> {
  constructor(props: ReviewsIndexProps) {
    super(props);
    this.state = {
      reviews: {id: 0, rate: 0, review: ""},
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
    fetch(`${APIURL}/reviews/mine`, {
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

  
  handleShow(){
    this.setState({show: !this.state.show})
  }
  



  render() {
    return (
      <div>

        {this.state.show ? 
        <ReviewsCreate
          fetchReviews={this.fetchReviews}
          token={this.props.token}
          username={this.props.username}
          handleshow={this.handleShow}
          />
        
         :
          <ReviewsDisplay
          reviews={this.state.reviews}
          fetchReviews={this.fetchReviews}
          token={this.props.token}
          username={this.props.username}
          handleshow={this.handleShow}
        />}
        
        
        
      </div>
    );
  }
}

export default ReviewsIndex;
