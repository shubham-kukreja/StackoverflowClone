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
          <div className="card-text"
            dangerouslySetInnerHTML={{
              __html: props.question.body,
            }}
          ></div>
          <PostLink className="post-link" qid={props.question._id}>
            View Details >
          </PostLink>
        </div>
      </Card.Body>
    </Card>
  );
}
