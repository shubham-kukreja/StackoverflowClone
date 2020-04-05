import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import questionData from "../data/questionsData";
import Answer from "./Answer";
import PostAnswer from "./PostAnswer";

class QuestionDetail extends Component {
  state = {
    data: this.props.data,
    answerCount: 0,
  };
  async componentDidMount() {
    console.log(`http://localhost:3000/api/qdetail?id=${this.props.questionId}`)
    const res = await fetch(`http://localhost:3000/api/qdetail?id=${this.props.questionId}`);
    const json = await res.json();
    this.setState({
      data: json,
      // answerCount: question.answers.length,
    });
  }
  render() {
    const { data, answerCount } = this.state;
    return (
      <>
        {data ? (
          <>
            <h1 className="question-heading">{data.title}</h1>
            <hr/>
            <h5 className="question-body">{data.body}</h5>
            <hr/>
            <p className="lead">{answerCount} Answers &nbsp;&nbsp;&nbsp;&nbsp;<span className="upvote" onClick={() => console.log('upvoted')}>&uarr;</span>&nbsp;Likes {data.like_count}</p>
            <hr/>
            <br/>
            {data.answers.map((ans) => (
              <Answer data={ans} key={ans.id} />
            ))}
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
