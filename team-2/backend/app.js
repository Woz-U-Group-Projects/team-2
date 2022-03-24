const dotenv = require('dotenv');
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const postsRoutes = require("../routes/posts");
const usersRoutes = require("../routes/users");
const { Server } = require('http');

const app = express();

dotenv.config({ path: './.env' });

mongoose.connect(process.env.DB_SECRET)
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch('error', (error) => {
    console.log('Connection Failed!', error);
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
