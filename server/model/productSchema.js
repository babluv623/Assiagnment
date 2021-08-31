const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
