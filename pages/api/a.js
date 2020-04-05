import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import { ObjectID } from "mongodb";

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  let { id } = req.query;
  let answer = req.body;
  console.log(answer)
  answer = JSON.parse(answer);
  let newData = await req.db
    .collection("questions")
    .updateOne({ _id: new ObjectID(id) }, { $push: { answers:  answer  } });
  res.json({ newData: newData });
});

export default (req, res) => handler.apply(req, res);
