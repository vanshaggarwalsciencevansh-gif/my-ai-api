
import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

// MAIN AI ENDPOINT
app.post("/api/chat", async (req, res) => {
  const { prompt } = req.body;

  try {
    // Replace with your model endpoint (LM Studio / HF / custom)
    const response = await axios.post("http://localhost:1234/v1/chat/completions", {
      model: "your-model",
      messages: [
        { role: "user", content: prompt }
      ]
    });

    res.json({
      reply: response.data.choices[0].message.content
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("API running...");
});
