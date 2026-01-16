const r = require("express").Router();
const c = require("../controllers/pharmacyController");
r.get("/nearby", c.nearby);
module.exports = r;
