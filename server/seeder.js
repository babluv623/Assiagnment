const mongoose = require("mongoose");
const dotenv = require("dotenv");
const products = require("./data/products");
const Product = require("./model/productSchema");
dotenv.config({ path: "./config.env" });
require("./db/conn");

const importData = async () => {
  try {
    const product = await Product.insertMany(products);
    await product.save();
    console.log("imported");
    process.exit();
  } catch (err) {
    console.log("error: " + err);
  }
};
module.exports = importData;
