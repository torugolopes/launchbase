const express = require("express");
const server = express();

server.get("/", function (req, res) {
  return res.send("olá mundo, vish é noir");
});

server.listen(5000, function () {
  console.log("Olá mundo");
});
