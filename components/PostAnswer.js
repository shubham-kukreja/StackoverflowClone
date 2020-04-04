import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

export default class PostAnswer extends Component {
  render() {
    const handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
    };
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Answer This Question</Form.Label>
          <Form.Control
            as="textarea"
            rows="2"
            name="body"
            onChange={handleChange}
            style={{'height' : '40px'}}
            required
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
