const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  // _id: { type: String, required: false },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: {type: String, required: false },
  personal: { type: Boolean, required: false },
  business: { type: Boolean, required: false },
  admin: { type: Boolean, required: false }
});

module.exports = mongoose.model('User', userSchema);

