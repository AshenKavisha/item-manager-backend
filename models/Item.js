const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    status: {
  type: String,
  default: "available",
},
location: {
  type: String,
  default: "Current location",
},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
