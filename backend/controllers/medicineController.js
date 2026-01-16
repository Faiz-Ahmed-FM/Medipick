const Medicine = require("../models/Medicine");

exports.add = async (req, res) => res.json(await Medicine.create(req.body));
exports.get = async (_, res) => res.json(await Medicine.find());
