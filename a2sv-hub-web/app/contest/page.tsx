import React from "react";
import ContestRating from "./contestRating";
import HeldContests from "./heldContests";

const ContestPage = () => {
  return (
    <div className="pl-8 pt-10 ">
      <h1 className="text-[#28313c] text-3xl font-bold">Contests</h1>
      <p className="text-sm text-[#a7b1bc]">Ratings & contests</p>

      <div className="flex gap-3 bg-[#fbfbfc]">
        <div className="flex-grow">
          <ContestRating />
        </div>
        <div className="flex-grow-[2] bg-[#fafafb]">
          <HeldContests />
        </div>
      </div>
    </div>
  );
};

export default ContestPage;
