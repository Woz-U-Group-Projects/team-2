const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  person: { type: String, required: true },
  business: {type: String, required: true },
  email: { type: String, required: true },
  birthday: { type: Date, required: false },
  years: { type: Number, required: false },
  faceBook: { type: String, required: false },
  twitter: { type: String, required: false },
  instagram: { type: String, required: false },
  truckYear: { type: Number, required: false },
  truckMake: { type: String, required: false },
  truckModel: { type: String, required: false },
  favoriteMovie: { type: String, required: false },
  favoriteBook: { type: String, required: false },
  favoriteBand: { type: String, required: false },
  businessName: { type: String, required: false },
  businessAddress: { type: String, required: false },
  businessCity: { type: String, required: false },
  businessState: { type: String, required: false },
  businessZip: { type: Number, required: false },
  businessPhone: { type: Number, required: false },
  businessUrl: { type: String, required: false },
  stock: { type: String, required: false },
});

module.exports = mongoose.model('Profile', postSchema);
