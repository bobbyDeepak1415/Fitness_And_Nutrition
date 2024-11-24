// src/pages/DietPlanDetails.jsx
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedDiet } from "../redux/dietSlice";

const DietPlanDetails = () => {
  const { planType } = useParams();
  const dispatch = useDispatch();

  // Check if planType exists before using it
  if (!planType) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-center text-red-500">
          <h2 className="text-xl font-bold mb-4">Invalid Plan</h2>
          <p>The selected diet plan does not exist. Please check the URL.</p>
        </div>
      </div>
    );
  }

  // Define diet plans
  const plans = {
    "weight-loss":
      "This is a detailed Weight Loss diet plan. It focuses on low-calorie, nutrient-dense foods.",
    "weight-gain":
      "This is a detailed Weight Gain diet plan. It is high in calories and protein to help build muscle.",
  };

  // Save the selected diet in Redux
  const selectedPlan = plans[planType];
  dispatch(setSelectedDiet(selectedPlan));

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-6 capitalize">
        {planType.replace("-", " ")} Diet Plan
      </h2>
      <p className="text-gray-700 text-center">{selectedPlan}</p>
    </div>
  );
};

export default DietPlanDetails;
