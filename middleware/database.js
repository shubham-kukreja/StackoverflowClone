import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

const client = new MongoClient(
  "mongodb+srv://skukreja:vijan5562@cluster0-f1muf.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
async function createIndex() {
  if (!client.isConnected()) await client.connect();
  const index = await client.db("redcarpet").collection("questions").createIndex({
    body: "text",
    title: "text",
  });
}
async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db("redcarpet");

  return next();
}

createIndex();
const middleware = nextConnect();

middleware.use(database);

export default middleware;
