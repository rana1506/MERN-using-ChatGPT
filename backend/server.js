import express from 'express'
import mongoose from 'mongoose'
import cors from'cors'
import dotenv from 'dotenv'

dotenv.config();

import authRoutes from './routes/authRoutes.js'

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Database connection error:', err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
