console.log("Backend starting...");

const express = require("express");
const cors = require("cors");
const quotes = require("./quotes");

const app = express();
app.use(cors());
app.use(express.json());

// app.get("/quotes/:mood", (req, res) => {
//   const mood = req.params.mood.toLowerCase();
//   const list = quotes[mood];

//   if (!list) {
//     return res.json({ quote: "Mood not found!" });
//   }

//   const random = list[Math.floor(Math.random() * list.length)];
//   res.json({ quote: random });
// });
app.get("/quotes/:mood", (req, res) => {
  const mood = req.params.mood.toLowerCase();

  const list = quotes[mood];
  if (!list) {
    return res.json({ quote: "Mood not found!" });
  }

  const random = list[Math.floor(Math.random() * list.length)];
  res.json({ quote: random });
});

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});
