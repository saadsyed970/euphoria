import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.get("/health", (_req, res) => {
  res.json({ status: 200, health: "OK" });
});


app.listen(PORT, () => {
  console.log(`Server up and running on PORT:${PORT}`);
});
