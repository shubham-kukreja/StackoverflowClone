import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import { ObjectID } from "mongodb";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  const { id } = req.query;
  let doc = await req.db.collection("questions").findOne({ _id: new ObjectID(id) });
  if (doc) res.json(doc);
  else res.json({ error: "Question Not Found" });
});

export default (req, res) => handler.apply(req, res);
