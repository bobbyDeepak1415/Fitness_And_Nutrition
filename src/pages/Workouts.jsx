import { Link } from "react-router-dom";

const Workouts = () => {
  const cards = [
    {
      title: "Weight Loss",
      description: "Effective exercises to help you burn fat and lose weight.",
      link: "/workouts/weight-loss",
    },
    {
      title: "Weight Gain",
      description: "Build muscle and gain healthy weight with these workouts.",
      link: "/workouts/weight-gain",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Workouts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition transform hover:scale-105 ease-in-out duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
            <p className="text-gray-600 mb-4">{card.description}</p>
            <Link
              to={card.link}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Check it Out
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workouts;
