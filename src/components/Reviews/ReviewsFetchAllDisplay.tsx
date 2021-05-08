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

export interface ReviewsFetchAllDisplayProps {
  fetchReviews: Function;
  token: string;
  username: string;
  reviews: IReviewsResponse[];
//   handleshow: Function;
}

export interface ReviewsFetchAllDisplayState {}

class ReviewsFetchAllDisplay extends React.Component<
ReviewsFetchAllDisplayProps,
ReviewsFetchAllDisplayState
> {
  constructor(props: ReviewsFetchAllDisplayProps) {
    super(props);
    this.state = {};
  }

  reviewMapper = () => {
    return this.props.reviews.map((review, index) => {
      return (
        <Slide key={index} index={1}>
          <b>Rating:</b> {review.rate}/5 - <b>"</b>{review.review}<b>"</b> 
        </Slide>
      );
    });
  };



  protectedUserViewReviews = () => {
    return this.props.reviews !== null ? (
        <div>
        <h4 className="text-center topreview">Reviews about our store!</h4>
        <div className="reviewdisplay text-center">
          <CarouselProvider
            naturalSlideWidth={300}
            naturalSlideHeight={20}
            totalSlides={5}
            hasMasterSpinner={false}
            interval={5000}
            dragEnabled={false}
            infinite={true}
          >
            <Slider>{this.reviewMapper()}</Slider>

            <ButtonBack className="backbtn">Back</ButtonBack>
            <ButtonNext className="nextbtn">Next</ButtonNext>
          </CarouselProvider>
        </div>
      </div>
      ) : null;

  }

  render() {
    return (
      <div>
        {this.protectedUserViewReviews()}
      </div>
    );
  }
}

export default ReviewsFetchAllDisplay;