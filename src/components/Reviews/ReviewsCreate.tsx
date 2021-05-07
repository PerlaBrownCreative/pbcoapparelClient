import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export interface ReviewsProps {
  fetchReviews: Function;
  token: string;
  username: string;

}

export interface ReviewsState {
rate: number;
review: string;
image: string;
values: [],
loading: boolean,
submitSuccess: boolean,
input: string,
}

class Reviews extends React.Component<ReviewsProps, ReviewsState> {
  constructor(props: ReviewsProps) {
    super(props);
    this.state = {
      rate: 0,
      review: "",
      image: "",
      values: [],
      loading: false,
      submitSuccess: false,
      input: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
}




  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(this.props.token);
    let token = this.props.token
      ? this.props.token
      : localStorage.getItem("token");
    fetch("http://localhost:4000/reviews/create", {
      method: "POST",
      body: JSON.stringify({
        reviews: {
          rate: this.state.rate,
          review: this.state.review,

        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token ? token : "",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          rate: 0,
          review: "",
        });
        this.props.fetchReviews();
      })
      .catch((err) => console.log(err));
  };


  displayName = () => {
    return localStorage.getItem("username")
      ? `${localStorage.getItem("username")}`
      : null;
  };



  render() {
    const { submitSuccess, loading } = this.state;

    return (
      <div>
        <Form className="review"
            onSubmit={this.handleSubmit}
            noValidate={true}>
          <FormGroup className="text-center">
        {!submitSuccess && (
            <div className="alert alert-info text-center" role="alert">
              Hi {this.displayName()} rate our store!
            </div>
          )}
          {submitSuccess && (
            <div className="alert alert-info text-center" role="alert">
              The form was successfully submitted!
            </div>
          )}
          </FormGroup>
          <FormGroup>
           <Label htmlFor="rate"> Rate from 1 - 5: </Label>

            <Input type="select" name="select" id="exampleSelect"
            value={this.state.rate}

            onChange={(e) => this.setState({ rate: +e.target.value })}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Review:</Label>
            <Input type="textarea" name="text" id="exampleText" 
            value={this.state.review}

            onChange={(e) => this.setState({ review: e.target.value })}/>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Reviews;
