const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const connectDatabase = require("./config/database");
const express = require("express");
const app = express();

app.use(express.json());

// Database Config
const db = require("./config/keys");

//Connecting to MongoDb
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("MongoDB Database connected");
  });

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server started on PORT: ${port}`);
});
