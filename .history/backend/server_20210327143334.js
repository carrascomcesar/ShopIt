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
  .then((con) => {
    console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
  })
  .catch((err) => console.log(err));

  
app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});
