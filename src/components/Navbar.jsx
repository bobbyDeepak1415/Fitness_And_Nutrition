import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-lg font-bold">Fitness App</h1>
        <div className="flex space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/workouts" className="hover:underline">
            Workouts
          </Link>
          <Link to="/diet-plans" className="hover:underline">
            Diet Plans
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
