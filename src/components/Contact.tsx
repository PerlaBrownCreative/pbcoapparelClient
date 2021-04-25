import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

function ContactForm() {
  const [state, handleSubmit] = useForm("xpzkwvak");
  if (state.succeeded) {
    return <p>Thanks for contacting us!</p>;
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="message">Message</Label>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </FormGroup>

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </Form>
  );
}

function App() {
  return <ContactForm />;
}
export default App;
