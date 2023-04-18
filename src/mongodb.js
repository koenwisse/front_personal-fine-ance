import { MongoClient } from "mongodb";
const uri = process.env.MONGO_URI;

// set up a connection to the MongoDB Atlas cluster
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// connect to the database
client.connect((err) => {
  if (err) throw err;

  // select the database and collection you want to use
  const db = client.db("mydb");
  const transactions = db.collection("transactions");

  // insert a new transaction into the database
  transactions.insertOne(
    {
      title: "Salary",
      amount: 5000,
      type: "income",
    },
    (err, result) => {
      if (err) throw err;
      console.log("New transaction added to database.");
    }
  );

  // query the database for transactions
  transactions.find().toArray((err, docs) => {
    if (err) throw err;
    console.log("Transactions found in database:");
    console.log(docs);
  });

  // close the database connection
  client.close();
});
