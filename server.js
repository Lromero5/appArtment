const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
var cors = require("cors");
require("dotenv").config();

var bodyParser = require('body-parser')


app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());



  app.use(express.static("client/build"));

app.use(routes);

var path = require('path')




app.use(function(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).send(err);
  } else {
    next(err);
  }
});

mongoose.connect(process.env.MONGODB_URI ||  "mongodb://user:appartment3@ds253537.mlab.com:53537/heroku_3sqqpzd3"
);


app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}   `);
});
