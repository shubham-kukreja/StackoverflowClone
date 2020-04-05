import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import QuestionDetail from "../../components/QuestionDetail"

export default function Post(props) {
  const router = useRouter();
  return (
    <Layout>
      <QuestionDetail questionId={router.query.qid}/>      
    </Layout>
  );
}
