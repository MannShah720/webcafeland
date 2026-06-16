import { useState } from "react";

const HomePage = () => {
  const [isBlue, setIsBlue] = useState<boolean>(false);

  const toggleColor = () => {
    setIsBlue(!isBlue);
  };

  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold">
        Welcome to Webcafe AI
      </h1>

      <p className="text-lg text-gray-500 mt-4">
        Your go-to solution for AI-driven web applications.
      </p>

      <div
        className={`w-24 h-24 mx-auto mt-6 transition-colors duration-500 ${
          isBlue ? "bg-blue-500" : "bg-red-500"
        }`}
      />

      <button
        onClick={toggleColor}
        className="mt-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded duration-200 "
      >
        Change Color
      </button>
    </div>
  );
};

export default HomePage;