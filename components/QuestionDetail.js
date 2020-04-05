import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import questionData from "../data/questionsData";
import Answer from "./Answer";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import PostAnswer from "./PostAnswer";

class QuestionDetail extends Component {
  state = {
    data: this.props.data,
    answerCount: 0,
    liked: false,
    body : null
  };
  async componentDidMount() {
    this.updateDetails();
  }
  updateDetails = async () => {
    const res = await fetch(
      `http://localhost:3000/api/qdetail?id=${this.props.questionId}`
    );
    const json = await res.json();
    this.setState({
      data: json,
      answerCount: json.answers.length,
    });
  };
  render() {
    const { data, answerCount, liked } = this.state;
    const upvote = async () => {
      this.setState({
        liked: true,
      });
      data.like_count += 1;
      const res = await fetch(
        `http://localhost:3000/api/qupvote?id=${this.props.questionId}`
      );
    };
    const handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log('clicked')
      const res = await fetch( `http://localhost:3000/api/a?id=${this.props.questionId}`, {
        method: "post",
        body: JSON.stringify(this.state.body),
      });
    };
    return (
      <>
        {data ? (
          <>
            <h1 className="question-heading">{data.title}</h1>
            <hr />
            <h5 className="question-body">{data.body}</h5>
            <hr />
            <p className="lead">
              {answerCount} Answers &nbsp;&nbsp;&nbsp;&nbsp;
              {liked ? (
                <span className="upvote liked">&uarr;</span>
              ) : (
                <span className="upvote" onClick={upvote}>
                  &uarr;
                </span>
              )}
              &nbsp;Likes {data.like_count}
            </p>
            <hr />
            <br />
            {data.answers.map((ans) => (
              <Answer data={ans} key={ans.id} />
            ))}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Write Answer</Form.Label>
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
