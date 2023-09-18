const mongoose = require("mongoose")

var PS = new mongoose.Schema({
  title: String,
  desc: String,
  price: Number,
  stock: Number
})

module.exports = mongoose.model("products",PS)
