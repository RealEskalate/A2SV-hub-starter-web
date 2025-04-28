import React from "react";
import ProgressIcon from "./ProgressIcon";
import { Bar, BarChart } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import chartConfig from "@/config/chartConfig";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const RateCard = () => {
  return (
    <div className="flex rounded-2xl shadow-md w-full gap-5 p-7 justify-between">
      <div className=" flex flex-col gap-2">
        <p className="text-sm"> Rating </p>
        <div className="flex gap-2">
          <ProgressIcon />
          <p>{6.0}%</p>
        </div>
        <p className="text-2xl font-bold">1,234</p>
      </div>
      <div className="w-[20%] my-auto">
        <ChartContainer config={chartConfig} className="min-h-3 ">
          <BarChart accessibilityLayer data={chartData}>
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default RateCard;
