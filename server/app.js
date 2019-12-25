const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Controllers = require("./controllers");

const app = express();
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(cors());

app.get("/", function(req, res) {
  res.send("I'm here!!!");
});

app.use("/api/findGame", Controllers.RAWGFinder);

module.exports = app;
