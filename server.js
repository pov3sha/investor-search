import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/api/investors", (req, res) => {
  const { sector, country } = req.body;

  // realistic dynamic mock logic
  const data = [
    {
      name: "Sequoia Capital",
      reason: `Active investor in ${sector} startups across ${country}`
    },
    {
      name: "Accel",
      reason: `Funds high-growth ${sector} companies in ${country}`
    },
    {
      name: "Lightspeed Ventures",
      reason: `Known for early-stage ${sector} investments`
    }
  ];

  // simulate AI delay (looks real in demo)
  setTimeout(() => {
    res.json({ investors: data });
  }, 900);
});

app.listen(3000, () =>
  console.log("✅ Server running → http://localhost:3000")
);
