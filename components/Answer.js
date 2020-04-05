import React, { Component } from 'react';

class Answer extends Component {
  state = {
    liked : false
  }
  render() {
    const upvote = async () => {
      this.setState({
        liked: true,
      });
      this.props.data.upvotes += 1;
      const res = await fetch(
        `http://localhost:3000/api/aupvote?id=${this.props.questionId}`
      );
    };
    return (
      <>
      <div className="row answer-row question-answer" >
        <div className="col-md-1">
          {this.props.data.upvotes}&nbsp;&nbsp;&nbsp;
          {this.state.liked ? (
            <span className="upvote liked">&uarr;</span>
          ) : (
            <span className="upvote" onClick={upvote}>
              &uarr;
            </span>
          )}
        </div>
        <div className="col-md-11">
          <div className="content">{this.props.data.body}</div> -{" "}
          {this.props.data.author.full_name}
        </div>
      </div>
      <br />

      <hr />
    </>
    );
  }
}

export default Answer;
