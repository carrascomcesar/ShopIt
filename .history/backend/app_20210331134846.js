const express = require("express");
const errorMiddleware = require("./middleware/errors");
const app = express();

app.use(express.json());

// Import all Routes
const products = require("./routes/product");
const auth = require("./routes/auth");

app.use("/api/v1", products);
app.use("/api/v1", products);

// Middleware to handle Errors
app.use(errorMiddleware);

module.exports = app;
