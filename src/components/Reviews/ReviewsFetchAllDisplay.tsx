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
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";


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
          <b>Rating:</b> {review.rate}/5 | <b>Review</b>: <b>"</b>{review.review}<b>"</b> 
        </Slide>
      );
    });
  };



  protectedUserViewReviews = () => {
    return this.props.reviews !== null ? (
        <div>
        <h4 className="text-center topreview"><b>Reviews</b></h4>
        <div className=" text-center">
          <CarouselProvider
            naturalSlideWidth={300}
            naturalSlideHeight={20}
            totalSlides={5}
            hasMasterSpinner={false}
            interval={5000}
            dragEnabled={false}
            infinite={true}
          >
            <div className="reviewdisplay text-center"><Slider>{this.reviewMapper()}</Slider></div>
            

            <ButtonBack className="backbtn"><FaAngleLeft/></ButtonBack>
            <ButtonNext className="nextbtn"><FaAngleRight/></ButtonNext>
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