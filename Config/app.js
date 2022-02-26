const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const models = require('./models');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


const app = express();

app.use((req, res, next) => {
  res.send('Hello from Express');
});

module.exports = app;