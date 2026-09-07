import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    destination: {
      type: String,
      required: true,
    },
    travelDates: {
      start: { type: Date, required: true },
      end: { type: Date, required: true },
    },
    budget: {
      type: String,
      required: true,
    },
    preferences: {
      type: [String],
      default: [],
    },
    itinerary: {
      type: Object, // Structured JSON response from AI
      required: true,
    },
  },
  { timestamps: true }
);

const Trip = mongoose.model('Trip', tripSchema);
export default Trip;
