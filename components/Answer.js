import Jumbotron from "react-bootstrap/Jumbotron";
import { Button } from "react-bootstrap";
export default function Answer(props) {
  return (
    <>
      <div className="row answer-row">
        <div className="col-md-1">
          {props.data.upvotes}&nbsp;&nbsp;&nbsp;
          <Button>&uarr;</Button>
        </div>
        <div className="col-md-11"><div className="content">{props.data.body}</div> - {props.data.answerer.full_name}</div>
      </div>
      <br />
      
      <hr />
    </>
  );
}
