import nextConnect from "next-connect";
import middleware from "../../middleware/database";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  let doc = await req.db.collection("questions").find({}).toArray();
  res.json(doc);
});

handler.post(async (req, res) => {
  let body = req.body;
  console.log(body);
  body = JSON.parse(body);
  let newData = await req.db.collection("questions").insertOne(body);
  res.json({ newData: newData });
});

export default (req, res) => handler.apply(req, res);
