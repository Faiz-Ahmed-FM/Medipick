const Order = require("../models/Order");
const sendEmail = require("../utils/sendEmail");
const { io } = require("../server");

exports.place = async (req, res) => {
  const order = await Order.create(req.body);
  io.emit("newOrder", "New Order Received");
  res.json(order);
};

exports.update = async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  ).populate("user");

  if (req.body.status === "READY")
    sendEmail(order.user.email);

  res.json(order);
};
