import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
      name: {type: String, required: true},
      category: String,
      price: {type: Number, required: true, min: 1, max: 100000},
});

export const Product = mongoose.model("Product", productSchema);