const router = require("express").Router();
router.use("/auth", require("./authRoutes"));
router.use("/medicines", require("./medicineRoutes"));
router.use("/pharmacy", require("./pharmacyRoutes"));
router.use("/orders", require("./orderRoutes"));
module.exports = router;
