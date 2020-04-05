import nextConnect from "next-connect";
import middleware from "../../middleware/database";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  let doc = await req.db.collection("questions").find({}).toArray();
  res.json(doc);
});

handler.post(async (req, res) => {
  let data = req.body;
  data = JSON.parse(data);
  console.log(data);
  let newData = await req.db.collection("questions").insertOne(data);
  res.json({ newData: newData });
});

export default (req, res) => handler.apply(req, res);
