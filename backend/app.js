const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
const errorMiddleware = require("./middleware/errors");
const cloudinary = require("cloudinary");

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Setting up Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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
