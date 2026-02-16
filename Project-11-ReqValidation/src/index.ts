import express, { Application, Request, Response } from "express";
import userRoutes from "./routes/user-route";

const app: Application = express();
const PORT = 5000;

app.use(express.json());

app.use("/api/users", userRoutes);

// Health check route
app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Handle unknown routes
app.use((_req: Request, res: Response) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});