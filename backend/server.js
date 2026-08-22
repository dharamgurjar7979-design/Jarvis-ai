const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "online",
    message: "JARVIS backend is running 🤖"
  });
});

app.post("/ask", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      error: "Message is required"
    });
  }

  // AI brain yahan connect hoga.
  // Abhi sirf testing response:
  res.json({
    reply: `Boss, maine suna: ${message}`
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`JARVIS backend running on port ${PORT}`);
});
