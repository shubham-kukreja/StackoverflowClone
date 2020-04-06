import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import Answer from "./Answer";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { server } from "../config";

class QuestionDetail extends Component {
  state = {
    data: null,
    answerCount: 0,
    liked: false,
    answerBody: "",
    author: "",
  };
  async componentDidMount() {
    this.updateDetails();
  }
  updateDetails = async () => {
    const res = await fetch(
      `${server}/api/qdetail?id=${this.props.questionId}`
    );
    const json = await res.json();
    this.setState({
      data: json,
      answerCount: json.answers.length,
    });
  };
  render() {
    let { data, answerCount, liked, answerBody, author } = this.state;
    const upvote = async () => {
      this.setState({
        liked: true,
      });
      data.like_count += 1;
      const res = await fetch(
        `${server}/api/qupvote?id=${this.props.questionId}`
      );
    };
    const handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };
    const handleSubmit = async (event) => {
      event.preventDefault();
      let obj = {
        author: {
          full_name: author,
        },
        body: answerBody,
        upvotes: 0,
      };
      let newData = data;
      newData.answers.push(obj);
      this.setState({
        data: newData,
      });
      const res = await fetch(`${server}/api/a?id=${this.props.questionId}`, {
        method: "post",
        body: JSON.stringify(obj),
      });
    };
    return (
      <>
        {data ? (
          <>
            <h1 className="question-heading">{data.title}</h1>
            <hr />
            <h5
              className="question-body"
              dangerouslySetInnerHTML={{
                __html: data.body,
              }}
            ></h5>
            <hr />
            <p className="lead question-stats">
              {answerCount} Answers &nbsp;&nbsp;&nbsp;&nbsp;
              {liked ? (
                <span className="upvote liked">&uarr;</span>
              ) : (
                <span className="upvote" onClick={upvote}>
                  &uarr;
                </span>
              )}
              &nbsp;Likes {data.like_count}&nbsp;&nbsp;&nbsp;&nbsp; -{" "}
              {data.author}
            </p>
            <hr />
            <br />
            {data.answers.map((ans, index) => (
              <Answer data={ans} key={ans.body} index={index} />
            ))}
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
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Write Answer</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="6"
                  name="answerBody"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button type="submit">Post Answer</Button>
            </Form>
            <br />
            <br />
          </>
        ) : (
          <div className="center text-center">
            <Spinner animation="border" />
          </div>
        )}
      </>
    );
  }
}

export default QuestionDetail;
