import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export interface ReviewsProps {}

export interface ReviewsState {}

class Reviews extends React.Component<ReviewsProps, ReviewsState> {
  constructor(props: ReviewsProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Form className="review">
          <FormGroup className="text-center">
            <Label for="exampleSelect" >Review</Label>
            </FormGroup>
            <FormGroup>
            <p>Rate this shirt</p>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Reviews;
