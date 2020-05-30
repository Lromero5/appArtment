const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
//newcode
var cors = require("cors");
require("dotenv").config();

var bodyParser = require('body-parser')


// Define middleware here
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//newcode
app.use(cors());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

//new code
// Error handling
app.use(function(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    // Send the error rather than to show it on the console
    res.status(401).send(err);
  } else {
    next(err);
  }
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI ||  "mongodb://user:appartment3@ds253537.mlab.com:53537/heroku_3sqqpzd3"
);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}   `);
});
