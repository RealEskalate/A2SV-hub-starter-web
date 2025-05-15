import React from "react";
import ProgressIcon from "./ProgressIcon";

const TimeSpentCard = () => {
  return (
    <div className="rounded-2xl shadow-md  w-full p-7 flex flex-col gap-2">
      <p className="text-sm">Time spent </p>
      <div className="flex gap-2">
        <ProgressIcon />
        <p>{3.0}%</p>
      </div>
      <div className="flex flex-col">
        <p className="text-2xl font-bold">
          12,456 <span className="text-sm text-gray-600">(min)</span>
        </p>
        <p className="text-sm text-gray-600">That&apos;s 7 Days</p>
      </div>
    </div>
  );
};

export default TimeSpentCard;
