console.log("Backend starting...");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const quotes = require("./quotes");

const app = express();

/* BASIC MIDDLEWARE */
app.use(cors());
app.use(bodyParser.json());

/* SECURITY — HELMET (UNCHANGED) */
app.use(helmet());

/* SECURITY — RATE LIMIT (UNCHANGED) */
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 50,
  message: { quote: "Too many requests. Slow down." }
});
app.use(limiter);

/* ✅ MAIN API — DO NOT CHANGE */
app.get("/quotes/:mood", (req, res) => {
  const mood = req.params.mood.toLowerCase();

  if (!quotes[mood]) {
    return res.json({ quote: "Invalid mood." });
  }

  const list = quotes[mood];
  const random = list[Math.floor(Math.random() * list.length)];
  res.json({ quote: random });
});

/* SERVER START */
const PORT = process.env.PORT || 5000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log("Backend running on port", PORT);
  });
}

module.exports = app;
