import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TripPlanner from "./pages/TripPlanner";
import GeneratedItinerary from "./pages/GeneratedItinerary";
import Login from "./pages/Login";
import CommunityFeed from "./pages/CommunityFeed";
import CreateDispatch from "./pages/CreateDispatch";
import DispatchView from "./pages/DispatchView";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "@/components/ui/toast";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plan" element={<TripPlanner />} />
        <Route path="/itinerary/:id" element={<GeneratedItinerary />} />
        <Route path="/community" element={<CommunityFeed />} />
        <Route path="/community/new" element={<CreateDispatch />} />
        <Route path="/community/:id" element={<DispatchView />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
