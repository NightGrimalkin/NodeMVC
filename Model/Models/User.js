const mongoose = require("mongoose");

const adressSchema = new mongoose.Schema({
  street: String,
  city: String,
});

const userSchema = new mongoose.Schema({
  login: { type: String, required: true, maxLength: 25 },
  password: String,
  name: { type: String, required: true, maxLength: 25 },
  lastName: { type: String, required: true, maxLength: 50 },
  adress: adressSchema,
  email: { type: String, required: true, maxLength: 50 },
  phoneNumber: { type: String, required: true, maxLength: 12 },
});

module.exports = mongoose.model("User", userSchema);
