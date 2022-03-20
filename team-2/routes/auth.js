const router = require('express').Router();
const User = require('../backend/models/user');

router.post('/reg', async , (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    userName: req.body.userName,
    password: req.body.password,
    personal: req.body.personal,
    business: req.body.business
  });
  try{
      const savedUser = await user.save();
      res.send(savedUser);
  }catch(err) {
      res.status(400).send(err);
  }

})
