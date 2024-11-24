import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Your Fitness Journey!
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Explore personalized workout plans and diet recommendations to help
          you achieve your fitness goals.
        </p>

        <div className="flex justify-center gap-8">
          <Link
            to="/workouts"
            className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition duration-300"
          >
            View Workout Plans
          </Link>

          <Link
            to="/diet-plans"
            className="bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition duration-300"
          >
            View Diet Plans
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
