const mongoose = require("mongoose");

module.exports = mongoose.model("Order",
  new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    items: Array,
    pickupTime: String,
    status: { type: String, default: "PENDING" }
  })
);

