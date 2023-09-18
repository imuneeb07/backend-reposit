const mongoose = require("mongoose")

var US = new mongoose.Schema({
  fullName: String,
  username: String,
  email: String,
  password: Number
})

module.exports = mongoose.model("users", US)
