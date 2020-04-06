import React, { Component } from "react";
import Layout from "../components/Layout";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import dynamic from "next/dynamic";
import { server } from "../config";
import Router from "next/router";

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
      this.setState({
        body: event,
      });
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
      const res = await fetch(`${server}/api/q`, {
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
          <Form.Group controlId="exampleForm.ControlInput2">
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
            <QuillNoSSRWrapper
              modules={modules}
              formats={formats}
              theme="snow"
              className="text-editor"
              onChange={handleChangeEditor}
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

// QUILL EDITOR CONFIG STARTS HERE
const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["code"],
    ["link"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "code"
];
// QUILL EDITOR CONFIG ENDS HERE
