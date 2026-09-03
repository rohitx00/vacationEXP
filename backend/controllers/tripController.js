import { GoogleGenerativeAI } from '@google/generative-ai';
import Groq from 'groq-sdk';
import Trip from '../models/Trip.js';

const systemPrompt = `You are an expert AI travel planner for "VacationExp". 
Generate a detailed, personalized travel itinerary based on the user's inputs. 
You must respond ONLY with a valid JSON object matching this structure exactly (no markdown, no backticks, just the JSON):
{
  "title": "A catchy title for the trip",
  "overview": "A brief overview of what to expect",
  "estimatedBudget": {
    "accommodation": "Cost estimate",
    "food": "Cost estimate",
    "transport": "Cost estimate",
    "activities": "Cost estimate",
    "total": "Total estimate"
  },
  "hiddenGems": ["gem 1", "gem 2", "gem 3"],
  "foodRecommendations": ["food 1", "food 2"],
  "travelTips": ["tip 1", "tip 2"],
  "dailyItinerary": [
    {
      "day": 1,
      "theme": "Theme of the day",
      "activities": [
        {
          "time": "Morning/Afternoon/Evening",
          "title": "Activity title",
          "description": "Activity description",
          "location": "Specific location"
        }
      ]
    }
  ]
}`;

const generateWithGemini = async (prompt) => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  // Trying gemini-1.5-pro as fallback
  const model = genAI.getGenerativeModel({ model: 'gemini-3.6-flash' });
  const fullPrompt = `${systemPrompt}\n\nUser Request: ${prompt}`;
  const result = await model.generateContent(fullPrompt);
  let text = result.response.text();
  text = text.replace(/```json/g, '').replace(/```/g, '').trim();
  return JSON.parse(text);
};

const generateWithGroq = async (prompt) => {
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  const completion = await groq.chat.completions.create({
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: prompt }
    ],
    // Using a highly stable Mixtral model on Groq
    model: 'llama-3.1-8b-instant',
    response_format: { type: 'json_object' }
  });
  return JSON.parse(completion.choices[0].message.content);
};

export const generateTrip = async (req, res) => {
  const { destination, startDate, endDate, budget, preferences } = req.body;

  const prompt = `Destination: ${destination}
Dates: ${startDate} to ${endDate}
Budget: ${budget}
Preferences: ${preferences.join(', ')}
Please generate the itinerary.`;

  try {
    let itinerary;
    try {
      console.log('Attempting to generate with Gemini...');
      itinerary = await generateWithGemini(prompt);
    } catch (geminiError) {
      console.error('Gemini failed, falling back to Groq:', geminiError.message);
      itinerary = await generateWithGroq(prompt);
    }

    res.json(itinerary);
  } catch (error) {
    console.error('AI Generation Error:', error.message);
    res.status(500).json({ message: 'Failed to generate itinerary. Please try again.' });
  }
};

export const saveTrip = async (req, res) => {
  const { destination, travelDates, budget, preferences, itinerary } = req.body;

  try {
    const trip = new Trip({
      user: req.user._id,
      destination,
      travelDates,
      budget,
      preferences,
      itinerary,
    });

    const savedTrip = await trip.save();
    res.status(201).json(savedTrip);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserTrips = async (req, res) => {
  try {
    const trips = await Trip.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
