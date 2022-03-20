const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const postsRoutes = require("../routes/posts");
const usersRoutes = require("../routes/users");

const app = express();

require('dotenv').config();

mongoose.connect("mongodb+srv://cleensvaart:g2L^VdmzuvsJJ85Db^@truck-u.xn293.mongodb.net/TRUCK-U?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/posts", postsRoutes);
app.use("/users", usersRoutes);

module.exports = app;
