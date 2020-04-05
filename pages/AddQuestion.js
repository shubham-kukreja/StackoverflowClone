import React, { Component } from "react";
import Layout from "../components/Layout";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import dynamic from "next/dynamic";
import Router from "next/router";

const CKEditor = dynamic(() => import("../components/CKEditor"), {
  ssr: false,
});
const ClassicEditor = dynamic(
  () => import("@ckeditor/ckeditor5-build-classic"),
  {
    ssr: false,
  }
);

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
    const handleChangeEditor = (event) => {
      console.log(event);
    };
    const handleSubmit = async (event) => {
      event.preventDefault();
      let obj = {
        title: this.state.title,
        author: this.state.author,
        body: this.state.body,
        answers: [],
        like_count: 0,
        created_at: new Date().toString(),
      };
      this.setState({
        loading: false,
      });
      const res = await fetch("http://localhost:3000/api/q", {
        method: "post",
        body: JSON.stringify(obj),
      });
      this.setState({
        submit: true,
        title: "",
        body: "",
        author: "",
        loading: true,
      });
      setTimeout(() => {
        Router.push("/");
      }, 1000);
    };
    return (
      <Layout>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="author"
              onChange={handleChange}
              required
            />
          </Form.Group>
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
            {/* <CKEditor
                data={this.state.title}
                name="body"
                onChange={handleChangeEditor}
                required
              /> */}
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

        {this.state.loading ? (
          <p></p>
        ) : (
          <div className="center text-center">
            <Spinner animation="border" />
          </div>
        )}
        {this.state.submit ? (
          <p className="text-red">Question Has Been Added</p>
        ) : (
          <p></p>
        )}
      </Layout>
    );
  }
}
