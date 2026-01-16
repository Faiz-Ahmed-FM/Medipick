const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  location: {
    type: { type: String, enum: ["Point"] },
    coordinates: [Number]
  }
});
schema.index({ location: "2dsphere" });

module.exports = mongoose.model("Pharmacy", schema);
