import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

import authRoutes from './routes/auth.js';
import tripRoutes from './routes/trips.js';
import postRoutes from './routes/posts.js';

import User from './models/User.js';
import Trip from './models/Trip.js';
import Post from './models/Post.js';

// ... other middleware ...
app.use(cors());
app.use(express.json());

// Database connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('Error connecting to MongoDB:', error.message));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/trips', tripRoutes);
app.use('/api/posts', postRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('VacationExp API is running...');
});

// Stats route
app.get('/api/stats', async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalTrips = await Trip.countDocuments();
    const totalPosts = await Post.countDocuments();
    res.json({ totalUsers, totalTrips, totalPosts });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
