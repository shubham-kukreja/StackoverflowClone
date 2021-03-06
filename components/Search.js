import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Button } from "react-bootstrap";
import QuestionCard from "../components/QuestionCard";
import Spinner from "react-bootstrap/Spinner";
import {server} from '../config'

export default class Search extends Component {
  state = {
    query: "",
    loading: false,
    data: [],
    message: "",
  };
  render() {
    const handleOnInputChange = (event) => {
      const query = event.target.value;
      this.setState({ query, message: "" });
    };
    const onSubmit = async (event) => {
      event.preventDefault();
      this.setState({
        loading: true,
      });
      const res = await fetch(
        `${server}/api/search?query=${this.state.query}`
      );
      const data = await res.json();
      console.log(data);
      this.setState({
        data: data,
        loading: false,
      });
      console.log(this.state);
    };
    return (
      <>
        <Form inline onSubmit={onSubmit}>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 search-box"
            onChange={handleOnInputChange}
          />
          <Button variant="outline-primary" type="submit">
            Search
          </Button>
        </Form>
        {!this.state.loading ? (
          <p></p>
        ) : (
          <div className="center text-center">
            <Spinner animation="border" />
          </div>
        )}
        {this.state.data.length ? (
          <>
            <p className="text-center">Search Results</p>
            {this.state.data.map((item) => (
              <QuestionCard question={item} key={item._id} />
            ))}
            <hr />
            <br />
            <br />
          </>
        ) : (
          <p></p>
        )}
      </>
    );
  }
}
