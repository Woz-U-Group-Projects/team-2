const express = require("express");
const User = require("../backend/models/user");

const router = express.Router();

router.post("", (req, res, next) => {
  const user = new User({
    userId: req.body.userId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    userName: req.body.userName,
    password: req.body.password,
    personal: req.body.personal,
    business: req.body.business,
    admin: req.body.admin
  });
  user.save().then(createdUser => {
    res.status(201).json({
      message: 'User added successfully',
      userId: createdUser.userId
    });
  });
});

router.put("/:id", (req, res, next) => {
  const user = new Post({
    userId: req.body.userId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    userName: req.body.userName,
    password: req.body.password,
    personal: req.body.personal,
    business: req.body.business,
    admin: req.body.admin
  });
  User.updateOne({userId: req.params.userId}, user).then(result => {
    res.status(200).json({message: 'Updated!'});
  });
});

router.get("", (req, res, next) => {
  User.find().then(documents => {
    res.status(200).json({
      message: "Users fetched successfully!",
      users: documents
    });
  });
});

router.get("/:id", (req, res, next) => {
  User.findByIdAndUpdate(req.params.id).then(user => {
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({message: "User not found!"});
    }
  })
})

router.delete("/:id", (req, res, next) => {
  User.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({ message: "User deleted!" });
  });
});

module.exports = router;
