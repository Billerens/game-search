const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Controllers = require("./controllers");
const favicon = require("express-favicon");
const path = require("path");

const app = express();
app.use(favicon(__dirname + "/build/favicon.ico"));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(cors());

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use("/api/findGame", Controllers.RAWGFinder);

module.exports = app;
