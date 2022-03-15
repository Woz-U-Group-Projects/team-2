const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const models = require('./models');
const { dotenv } = require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


const app = express();

require('dotenv').config();
mongoose.connect(mongodb+srv,//cleensvaart:g2L^VdmzuvsJJ85Db^@truck-u.xn293.mongodb.net/TRUCK-U?retryWrites=true&w=majority”)
  then(() => {
    console.log('Connected to the database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  }));
app.use((req, res, next) => {
  res.send('Hello from Express');
});

module.exports = app;