import express, { Request, Response } from "express";
import cors from "cors";
import { envConfig } from "./config/env.config";

const app = express();
const PORT = envConfig.port;

app.use(cors());
app.use(express.json());

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: 200, health: "OK" });
});

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
