var express = require('express');
var router = express.Router();
const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'us-cdbr-east-05.cleardb.net',
  user: 'b8ffea18e3c2c3',
  password: '66937ca3',
  database: 'TruckU Database'
});

connection.connect(function(err) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Yay! You are connected to the database!');
});

const query = `SELECT * from users LIMIT 10`;

// db.all(query, (err, row) -> {
//  if (err) throw err;
//  console.log(row);
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;