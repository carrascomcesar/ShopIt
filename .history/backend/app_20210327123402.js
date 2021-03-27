const express = require("express");
const app = express();

// Import all Routes
const products = require('./routes/product')

module.exports = app;
