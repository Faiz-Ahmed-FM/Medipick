const r = require("express").Router();
const c = require("../controllers/medicineController");
r.post("/", c.add);
r.get("/", c.get);
module.exports = r;
