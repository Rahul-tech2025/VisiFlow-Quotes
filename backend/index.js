console.log("Backend starting...");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");          // ✅ ADDED
const quotes = require("./quotes");

const app = express();

/* ===== BASIC MIDDLEWARE (UNCHANGED) ===== */
app.use(cors());
app.use(bodyParser.json());

/* ===== SECURITY STEP 3 — HELMET ===== */
app.use(helmet());

/* ===== SECURITY STEP 1 — RATE LIMITING ===== */
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 50,                // 50 requests per IP
  message: { quote: "Too many requests. Slow down." }
});

app.use(limiter);

/* ===== SECURITY STEP 2 — MOOD VALIDATION ===== */
app.get("/quotes/:mood", (req, res) => {
  const mood = req.params.mood.toLowerCase();

  const allowedMoods = Object.keys(quotes);
  if (!allowedMoods.includes(mood)) {
    return res.json({ quote: "Invalid mood." });
  }

  const list = quotes[mood];
  const random = list[Math.floor(Math.random() * list.length)];

  res.json({ quote: random });
});

/* ===== SERVER START ===== */
app.listen(5000, () => {
  console.log("Secure backend running at http://localhost:5000");
});
