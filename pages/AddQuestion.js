import React, { Component } from "react";
import Layout from "../components/Layout";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

export default class AddQuestion extends Component {
  state = {
    title: null,
    body: null,
    author: null,
    submit: false,
    loading: true,
  };

  render() {
    const handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };
    const handleSubmit = async (event) => {
      event.preventDefault();
      const res = await fetch("http://localhost:3000/api/q", {
        method: "post",
        body: JSON.stringify(this.state),
      });
    };
    return (
      <Layout>
        {this.state.loading ? (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Question Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                onChange={handleChange}
                required
              />
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
        ) : (
          <div className="center text-center">
            <Spinner animation="border" />
          </div>
        )}
      </Layout>
    );
  }
}
