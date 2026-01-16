const nodemailer = require("nodemailer");

module.exports = async to => {
  const t = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  await t.sendMail({
    to,
    subject: "Order Ready",
    text: "Your order is ready for pickup."
  });
};
