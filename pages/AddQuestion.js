import React, { Component } from "react";
import Layout from "../components/Layout";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

export default class AddQuestion extends Component {
  state = {
    title: null,
    body: null,
    author: null,
  };

  render() {
    const handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    };
    return (
      <Layout>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Question Title</Form.Label>
            <Form.Control type="text" name="title" onChange={handleChange} required/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              rows="6"
              name="body"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button type="submit">Post Question</Button>
        </Form>
      </Layout>
    );
  }
}
