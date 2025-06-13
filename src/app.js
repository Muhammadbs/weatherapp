require('dotenv').config();
const express = require("express");
const hbs = require("hbs");
const path = require("path");
const saveLog = require('../utils/saveLog');
const weatherData = require("../utils/weatherData");

const app = express();
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicPath));

app.get("", (req, res) => {
  res.render("index", { title: "Weather App" });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send("Address is required");
  }

  weatherData(req.query.address, async (error, result) => {
    if (error) {
      return res.send(error);
    }

    res.send(result);

    const requesterIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    await saveLog(requesterIP, result, "Weather data fetched");
  });
});

app.get("*", (req, res) => {
  res.render("404", { title: "Page not found" });
});

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});