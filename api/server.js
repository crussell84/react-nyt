// Dependencies
// =============================================================
var express = require("express");
var request = require("request");
var mongoose = require("mongoose");
var cheerio = require("cheerio");
require('dotenv').config();

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;
var db = require("./models");
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// staticly serve the React build artifacts if NOT in development mode
if (process.env.NODE_ENV === "production") {
  console.log("Serving Static Build Content.");
  app.use(express.static("build"));
}
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://root:root@127.0.0.1/nytreact?authSource=admin";
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);
// Routes
// =============================================================

// Basic route
app.get("/api/test", function(req, res) {
  res.json({status: "success"});
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("API endpoint listening on PORT " + PORT);
});