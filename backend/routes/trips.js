import express from 'express';
import { generateTrip, saveTrip, getUserTrips } from '../controllers/tripController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Generate a trip (requires auth)
router.post('/generate', protect, generateTrip);

// Save a generated trip (requires auth)
router.post('/save', protect, saveTrip);

// Get all saved trips for the logged in user (requires auth)
router.get('/', protect, getUserTrips);

export default router;
