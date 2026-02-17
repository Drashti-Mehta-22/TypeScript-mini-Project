import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './configs/db';
import authRoutes from './routes/user-routes';

dotenv.config()

const app: Application = express()
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB()

// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/auth', authRoutes)

// Health check
app.get('/', (req: Request, res: Response) => {
  res.json({ message: '🚀 Auth API is running!' })
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})