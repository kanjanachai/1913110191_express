var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
///
var companiesRouter = require("./routes/company")

var app = express();

mongoose.connect(
  "mongodb+srv://superdev:lin2357649@1913110191-lin.5grblxi.mongodb.net/restfulapi?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
///
app.use("/company", companiesRouter);

module.exports = app;
