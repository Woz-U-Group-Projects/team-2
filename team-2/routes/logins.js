const router = require('express').Router();
const login = require('../backend/models/login');

router.post('/login', (req, res) => {
  const login = new login({
    userName: req.body.name,
    password: req.body.password
  });
})

module.exports = router;
