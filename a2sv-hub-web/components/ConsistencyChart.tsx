"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function ConsistencyChart() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const data = Array.from({ length: 365 }, () => Math.floor(Math.random() * 5));
  const weeks: number[][] = [];

  const startDate = new Date(selectedYear, 0, 1);
  const startDay = startDate.getDay(); 

  let dayIndex = 0;
  let currentWeek = new Array(startDay).fill(undefined); 

  while (dayIndex < data.length) {
    currentWeek.push(data[dayIndex]);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    dayIndex++;
  }

  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push(undefined);
    }
    weeks.push(currentWeek);
  }

  const monthPositions = months.map((_, idx) => ({
    label: months[idx],
    index: Math.floor((weeks.length / 12) * idx),
  }));

  return (
    <Card className="p-4 ml-24 mr-9">
      <CardContent className="p-0">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold text-lg">Consistency</h4>
          <select
            className="border border-gray-300 rounded px-2 py-1 text-sm"
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
          >
            {[2025, 2024, 2023].map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
        </div>

        {/* Grid */}
        <div className="flex bg-muted p-2 rounded-md ">
          {/* Weekday Labels */}
          <div
            className="flex flex-col justify-between mr-2 text-xs text-gray-400"
            style={{ height: `${7 * 14 + 6 * 2}px` }}
          >
            {Array(7)
              .fill(null)
              .map((_, idx) => {
                const day = weekdays[idx]; 
                return (
                  <div
                    key={idx}
                    className="h-[14px] mt-[9px] flex items-center"
                  >
                    {["Mon", "Wed", "Fri"].includes(day) ? day : " "}
                  </div>
                );
              })}
          </div>

          {/* Month Headers + Heatmap */}
          <div className="flex-1 overflow-x-auto">
            {/* Month Labels */}
            <div
              className="flex mb-1"
              style={{ minWidth: `${weeks.length * 14}px` }}
            >
              {weeks.map((_, wIdx) => {
                const match = monthPositions.find((m) => m.index === wIdx);
                return (
                  <div
                    key={wIdx}
                    className="w-3 h-3 flex justify-center items-center"
                    style={{ width: 14 }}
                  >
                    {match ? (
                      <span className="text-[10px] text-gray-400">
                        {match.label}
                      </span>
                    ) : (
                      <span className="text-[10px] text-gray-400">&nbsp;</span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Heatmap Grid */}
            <div
              className="flex gap-[2px]"
              style={{ minWidth: `${weeks.length * 14}px` }}
            >
              <TooltipProvider>
                {weeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-[3px]">
                    {week.map((val, dIdx) => (
                      <Tooltip key={dIdx}>
                        <TooltipTrigger className="w-3 h-3">
                          <div
                            className="w-3 h-3"
                            style={{ backgroundColor: getHeatColor(val ?? 0) }}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs text-white-800">
                             {new Date(selectedYear, 0, wIdx * 7 + dIdx + 1 - startDay).toDateString()} — {val} submission{val !== 1 ? "s" : ""}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                ))}
              </TooltipProvider>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function getHeatColor(level: number) {
  const colors = ["#e5e7eb", "#a3e635", "#65a30d", "#3f6212", "#14532d"];
  return colors[level];
}

export default ConsistencyChart;
