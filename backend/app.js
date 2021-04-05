const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/errors");

app.use(express.json());
app.use(cookieParser());

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
