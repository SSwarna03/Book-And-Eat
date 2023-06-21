const mongoose = require("mongoose");

const DetailsSchema = mongoose.Schema({
  product: String,
  price: Number,
  quantity:String
});

module.exports = mongoose.model("Details", DetailsSchema);