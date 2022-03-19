const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  userID: {type: String, required: false },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  userName: { type: String, required: false },
  email: { type: String, required: false },
  password: {type: String, required: false },
  personal: { type: Boolean, required: false },
  business: { type: Boolean, required: false },
  admin: { type: Boolean, required: false }
});

module.exports = mongoose.model('User', postSchema);

