import express, { Application } from "express";
import UserRoutes from "./routes/UserRoutes"

const app: Application = express();
const PORT = 8000;

app.use(express.json());

app.use("/users", UserRoutes);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});