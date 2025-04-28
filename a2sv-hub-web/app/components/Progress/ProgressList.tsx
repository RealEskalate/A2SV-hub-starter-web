"use client";
import React from "react";

import TimeSpentCard from "./TimeSpentCard";
import RateCard from "./RateCard";
import SolutionsCard from "./SolutionsCard";

const ProgressList = () => {
  return (
    <div className="flex justify-between gap-6">
      <SolutionsCard />
      <TimeSpentCard />
      <RateCard />
    </div>
  );
};

export default ProgressList;
