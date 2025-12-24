const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const quotes = require("./quotes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/quote", (req, res) => {
  const { mood } = req.body;

  const list = quotes[mood.toLowerCase()];
  if (!list) return res.json({ quote: "Mood not found!" });

  const random = list[Math.floor(Math.random() * list.length)];
  res.json({ quote: random });
});

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});
