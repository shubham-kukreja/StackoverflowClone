import React, { Component } from "react";
import Layout from "../components/Layout";
import QuestionCard from "../components/QuestionCard";
import questionData from "../data/questionsData";
import { Button } from "react-bootstrap";
import Link from 'next/link'

class Index extends Component {
  state = {
    questions: questionData,
  };
  render() {
    return (
      <Layout>
        <Button type="submit" className="mb-2 floating-btn">
          <Link href="/AddQuestion" as={`/add-question`}>
            <a className="nav-link text-white">Ask Questions</a>
          </Link>
        </Button>
        {this.state.questions.map((item) => (
          <QuestionCard question={item} key={item.id} />
        ))}
      </Layout>
    );
  }
}

export default Index;
