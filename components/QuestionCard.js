import { Card, Button } from "react-bootstrap";
import Link from "next/link";

const PostLink = (props) => (
  <Link href="/q/[qid]" as={`/q/${props.qid}`}>
    <a className="nav-link">{props.children}</a>
  </Link>
);

export default function QuestionCard(props) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{props.question.title}</Card.Title>
        <Card.Text>{props.question.body} </Card.Text>
        <PostLink qid={props.question.id}>Answers</PostLink>
      </Card.Body>
    </Card>
  );
}
