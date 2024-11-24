import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
import WorkoutPlan from "./pages/WorkoutPlan";
import DietPlans from "./pages/DietPlans";
import DietPlanDetails from "./pages/DietPlanDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/workouts/:planType" element={<WorkoutPlan />} />
        <Route path="/diet-plans" element={<DietPlans />} />
        <Route path="/diet-plans/:planType" element={<DietPlanDetails />} />
      </Routes>
    </div>
  );
}

export default App;
