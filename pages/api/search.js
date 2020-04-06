import nextConnect from "next-connect";
import middleware from "../../middleware/database";
const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  const { query } = req.query;
  console.log(query)
  let doc = await req.db
    .collection("questions")
    .find({ $text: { $search: query } })
    .toArray();
  res.json(doc);
});

export default (req, res) => handler.apply(req, res);
