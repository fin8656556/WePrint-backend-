const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/calculate", (req, res) => {
  const { volume } = req.body;

  if (!volume) {
    return res.status(400).json({ error: "Volume is required" });
  }

  const pricePerCm3 = 0.15; // adjust your pricing here
  const price = (volume * pricePerCm3).toFixed(2);

  res.json({ price });
});

app.get("/", (req, res) => {
  res.send("WePrint backend is running");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
