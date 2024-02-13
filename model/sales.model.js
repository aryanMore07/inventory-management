const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    amount: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

const Sales = mongoose.model("Sales", salesSchema);

module.exports = Sales;
