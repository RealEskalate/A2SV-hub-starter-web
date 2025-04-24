"use client";
import React from "react";

import TimeSpentCard from "./TimeSpentCard";
import RateCard from "./RateCard";
import ProgressIcon from "./ProgressIcon";

const ProgressList = () => {
  return (
    <div className="flex justify-between gap-6">
      <Solutions />
      <TimeSpentCard />
      <RateCard />
    </div>
  );
};

export default ProgressList;

const Solutions = () => {
  return (
    <div className="rounded-2xl shadow-md  w-full p-7 flex flex-col gap-2">
    <p className="text-sm"> Solutions </p>
    <div className="flex gap-2">
      <ProgressIcon />
      <p>{1.0}%</p>
    </div>
    <p className="text-2xl font-bold">{483}</p>
  </div>
  )
}