import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TripPlanner from './pages/TripPlanner';
import GeneratedItinerary from './pages/GeneratedItinerary';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plan" element={<TripPlanner />} />
        <Route path="/itinerary/:id" element={<GeneratedItinerary />} />
      </Routes>
    </Router>
  );
}

export default App;
