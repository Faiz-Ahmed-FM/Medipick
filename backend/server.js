const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

io.on("connection", () => {
  console.log("Admin connected");
});

app.use("/api", require("./routes"));

module.exports.io = io;

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
