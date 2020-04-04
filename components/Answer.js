import Jumbotron from "react-bootstrap/Jumbotron";
import { Button } from "react-bootstrap"
export default function Answer(props) {
  return (
    <>
      <Jumbotron fluid className="p-2 mb-2 mu-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10">{props.data.body}</div>
            <div className="col-md-2">
              {props.data.upvotes}&nbsp;&nbsp;&nbsp;
              <Button>+</Button>
            </div>
          </div>
          <>- {props.data.answerer.full_name}</>
        </div>
      </Jumbotron>
    </>
  );
}
