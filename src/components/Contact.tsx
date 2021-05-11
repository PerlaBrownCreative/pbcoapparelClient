import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";


function ContactForm() {
  const [state, handleSubmit] = useForm("xpzkwvak");
  if (state.succeeded) {
    return <p className="thanksmessage">Thanks for contacting us!</p>;
  }
  return (
    <div className="outerProfile">
    <p className="userProfileHeader">Contact Us</p>
    <Form onSubmit={handleSubmit} className="contactFrm">
    <p>We love feedback! Leave us a message and we'll email you back promptly. Have a great day!</p>

      <FormGroup>
        <Label htmlFor="email">Email Address:</Label>
        <Input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="message">Message:</Label>
        <Input type="textarea" name="message" id="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </FormGroup>

      <Button className="submitbtn1" disabled={state.submitting}>
        Submit
      </Button>
    </Form>
    </div>
  );
}

function App() {
  return <ContactForm />;
}
export default App;
