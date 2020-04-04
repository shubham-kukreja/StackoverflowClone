import { Card, Button } from "react-bootstrap";
import Link from "next/link";

const PostLink = (props) => (
  <Link href="/q/[qid]" as={`/q/${props.qid}`}>
    <a className="nav-link">{props.children}</a>
  </Link>
);

export default function QuestionCard(props) {
  return (
    <Card>
      <Card.Body>
        <div className="card-col-2">
          <Card.Title>{props.question.title}</Card.Title>
          <Card.Text>{props.question.body} </Card.Text>
          <PostLink className="post-link" qid={props.question.id}>
            View Details > 
          </PostLink>
        </div>
      </Card.Body>
    </Card>
  );
}
