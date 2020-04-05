import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import { ObjectID } from "mongodb";

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  let { id } = req.query;
  let data = req.body;
  data = JSON.parse(data);
  let obj = {
      author : {
          full_name : "Shubham Kukreja",
      },
      upvotes : 0,
      body : data,
      id : new ObjectID
  }
  let newData = await req.db
    .collection("questions")
    .updateOne({ _id: new ObjectID(id) }, { $push: { answers:  obj  } });
  res.json({ newData: newData });
});

export default (req, res) => handler.apply(req, res);
