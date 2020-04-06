import React, { Component } from "react";
import Layout from "../components/Layout";
import QuestionCard from "../components/QuestionCard";
import questionData from "../data/questionsData";
import { Button } from "react-bootstrap";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Spinner from "react-bootstrap/Spinner";
import Search from "../components/Search";

class Index extends Component {
  state = {
    questions: this.props.data,
  };
  render() {
    return (
      <Layout>
        <Search/>
        {this.state.questions ? (
          <>
            <Button type="submit" className="mb-2 floating-btn">
              <Link href="/AddQuestion" as={`/add-question`}>
                <a className="nav-link text-white">Ask Questions</a>
              </Link>
            </Button>
            {this.state.questions.map((item) => (
              <QuestionCard question={item} key={item._id} />
            ))}
          </>
        ) : (
          <div className="center text-center">
            <Spinner animation="border" />
          </div>
        )}
      </Layout>
    );
  }
}
Index.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/q");
  const json = await res.json();
  return { data: json };
};
export default Index;
