import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import { ObjectID } from "mongodb";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  const { id } = req.query;
  let doc = await req.db.collection("questions").updateOne({ _id: new ObjectID(id) }, { $inc: { like_count: 1 } });
  res.json(doc);
});

export default (req, res) => handler.apply(req, res);
