// src/pages/WorkoutPlan.jsx
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedWorkout } from "../redux/workoutSlice";

const WorkoutPlan = () => {
  const { planType } = useParams(); // Get planType from URL
  const dispatch = useDispatch();

  // Check if planType exists before using it
  if (!planType) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-center text-red-500">
          <h2 className="text-xl font-bold mb-4">Invalid Plan</h2>
          <p>The selected workout plan does not exist. Please check the URL.</p>
        </div>
      </div>
    );
  }

  // Define workout plans
  const plans = {
    "weight-loss": "This is a detailed Weight Loss workout plan.",
    "weight-gain": "This is a detailed Weight Gain workout plan.",
  };

  // Save the selected workout in Redux
  const selectedPlan = plans[planType];
  dispatch(setSelectedWorkout(selectedPlan));

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-6 capitalize">
        {planType.replace("-", " ")} Plan
      </h2>
      <p className="text-gray-700 text-center">{selectedPlan}</p>
    </div>
  );
};

export default WorkoutPlan;