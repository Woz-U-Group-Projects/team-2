const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
});

module.exports = mongoose.model("login", loginSchema);
