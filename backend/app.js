const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

// const bodyParser = require("body-parser");
const errorMiddleware = require("./middleware/errors");

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

// Middleware to handle Errors
app.use(errorMiddleware);

// Import all Routes
const auth = require("./routes/auth");
const products = require("./routes/product");
const order = require("./routes/order");

app.use("/api/v1", products);
app.use("/api/v1", auth);
app.use("/api/v1", order);

module.exports = app;
