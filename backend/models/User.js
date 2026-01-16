const mongoose = require("mongoose");

module.exports = mongoose.model("User",
  new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    role: { type: String, default: "customer" }
  })
);
