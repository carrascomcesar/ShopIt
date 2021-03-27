// Import mongoose Module
const mongoose = require("mongoose");
const db = require("./keys").mongoURI;

const connectData = (params) => {
    
}

// Setup Connection
const connectDatabase = () => {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((con) => {
      console.log(
        `MongoDB Database connected with HOST: ${con.connection.host}`
      );
    })
    .catch((err) => console.log(err));
};
