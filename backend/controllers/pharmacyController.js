const Pharmacy = require("../models/Pharmacy");

exports.nearby = async (req, res) => {
  const { lat, lng } = req.query;
  res.json(await Pharmacy.find({
    location: {
      $near: {
        $geometry: { type: "Point", coordinates: [lng, lat] },
        $maxDistance: 5000
      }
    }
  }));
};
