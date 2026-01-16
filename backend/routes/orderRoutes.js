const r = require("express").Router();
const c = require("../controllers/orderController");
r.post("/", c.place);
r.put("/:id", c.update);
module.exports = r;
