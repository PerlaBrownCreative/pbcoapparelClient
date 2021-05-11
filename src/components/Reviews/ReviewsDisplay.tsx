import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { IReviewsResponse } from "../AdminAccess/interfaces";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import ReviewsDelete from "./ReviewsDelete";
import ReviewsUpdate from "./ReviewsUpdate"


export interface ReviewsDisplayProps {
  fetchReviews: Function;
  token: string;
  username: string;
  reviews: IReviewsResponse;
  handleshow: Function;
}

export interface ReviewsDisplayState {
  updateActive: boolean;
  ReviewsToUpdate: {}
}

class ReviewsDisplay extends React.Component<
  ReviewsDisplayProps,
  ReviewsDisplayState
> {
  constructor(props: ReviewsDisplayProps) {
    super(props);
    this.state = {
        updateActive: false,
        ReviewsToUpdate: {}



    };
  }

  updateOn = () => {
    this.setState({ updateActive: true });
  };

  updateOff = () => {
    this.setState({ updateActive: false });
  };

  displayName = () => {
    return localStorage.getItem("username")
      ? `${localStorage.getItem("username")}`
      : null;
  };


ProtectedUserReview = () => {
  return this.props.reviews !== null && this.props.reviews.rate !== 0 ? (
<Col sm="12">
        <Card className="text-center" body>
          <CardTitle tag="h5">Here's your review <b>{this.displayName()}</b>!</CardTitle>
          <CardText><b>Rate:</b> {this.props.reviews.rate} / 5</CardText>
          <CardText><b>Review:</b> "{this.props.reviews.review}"</CardText>
          <div className="outerbuttons1">
          <ReviewsUpdate
          reviews={this.props.reviews}
          token={this.props.token}
          fetchReviews={this.props.fetchReviews}
          
          
          />

          <ReviewsDelete
          reviews={this.props.reviews.id}
          token={this.props.token}
          fetchReviews={this.props.fetchReviews}
          handleshow={this.props.handleshow}

          
          />
        </div>
        </Card>
      </Col>


  ) : null;
}





  render() {
    console.log(this.props.reviews)
    return (
      <div className="outeryourreview">
        
        {this.ProtectedUserReview()}


      </div>
    );
  }
}

export default ReviewsDisplay;
