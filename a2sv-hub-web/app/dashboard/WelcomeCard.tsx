import React from "react";

const WelcomeCard = () => {
  return (
    <div className="bg-green-200 shadow-md rounded-lg p-10 w-[60%]">
      <div>
        <p className="text-2xl font-bold mb-4">Sometimes you have to shut your eyes, so you can see the real beauty.</p>
        <p className="mb-2"> — Kilian Jornet </p>
        <p className="text-gray-700 mb-4">
        Welcome back, Melkishi!
        </p>
        <button className="rounded-md bg-green-600 text-white px-4 py-2 font-extrabold hover:bg-teal-700 hover:cursor-pointer text-sm">
          Problems
        </button>
      </div>
    </div>
  );
};

export default WelcomeCard;
