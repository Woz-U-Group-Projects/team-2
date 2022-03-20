const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: { type: String, required: false },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  userName: { type: String, required: false },
  email: { type: String, required: false },
  password: {type: String, required: false },
  personal: { type: Boolean, required: false },
  business: { type: Boolean, required: false },
});

module.exports = mongoose.model('User', userSchema);

