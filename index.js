const express = require("express");
const IndexRoute = require("./route/index.js")
const app = express();

app.set('port', 4000)
app.use(express.json());
app.use("/api", IndexRoute)

module.exports = app;