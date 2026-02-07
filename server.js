import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/api/investors", (req, res) => {
  const { sector, country } = req.body;

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

  setTimeout(() => {
    res.json({ investors: data });
  }, 900);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
