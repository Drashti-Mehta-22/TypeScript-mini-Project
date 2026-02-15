import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./configs/db";
import userRoutes from "./routes/user-routes";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173" })); // Vite url
app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});