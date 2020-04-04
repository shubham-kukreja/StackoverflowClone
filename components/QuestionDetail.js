import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import questionData from "../data/questionsData";
import Answer from "./Answer";
import PostAnswer from "./PostAnswer";

class QuestionDetail extends Component {
  state = {
    data: null,
    answerCount: 0,
  };
  componentDidMount() {
    const question = questionData.filter(
      (item) => item.id === parseInt(this.props.questionId)
    )[0];

    this.setState({
      data: question,
      answerCount: question.answers.length,
    });
  }
  render() {
    const { data, answerCount } = this.state;
    return (
      <>
        {data ? (
          <div className="container">
            <h1>{data.title}</h1>
            <p>{data.body}</p>
            <p>Total Answers : {answerCount}</p>
            {data.answers.map((ans) => (
              <Answer data={ans} key={ans.id} />
            ))}
            <PostAnswer />
          </div>
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
