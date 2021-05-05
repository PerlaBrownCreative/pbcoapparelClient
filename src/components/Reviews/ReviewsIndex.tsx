import React from 'react'
import { IReviewsResponse } from '../AdminAccess/interfaces';

export interface ReviewsIndexProps {
    token: string,
}
 
export interface ReviewsIndexState {
    reviews: IReviewsResponse[]
    

}


 
class ReviewsIndex extends React.Component<ReviewsIndexProps, ReviewsIndexState> {
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







    render() { 
        return ( 
            <div>



            </div>
         );
    }
}
 
export default ReviewsIndex;