import { LuExternalLink } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PiClockAfternoonLight } from "react-icons/pi";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from "react-icons/fa";
import { cn } from "@/lib/utils";
import React from "react";

interface DailyProblemCardProps {
  backgroundStyle?: string; // Accepts Tailwind classes or custom styles
}

const DailyProblemCard = ({ backgroundStyle }: DailyProblemCardProps) => {
  return (
    <Card
      className={cn(
        "p-10 w-full relative transition-all duration-300 bg-gradient-to-r from-green-200 via-green-100 to-green-200",
        backgroundStyle
      )}
    >
      <CardContent className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <h2 className="text-lg font-semibold">Daily problem</h2>
              <PiClockAfternoonLight className="h-full m-auto" fontWeight={6} fontSize={18}/>
            </div>
            <div className="flex gap-2 items-center">
              <FaRegArrowAltCircleUp color="green" fontSize={24}/>
              11
              <FaRegArrowAltCircleDown color="green" fontSize={24}/>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Refreshes every 24 hours and needs to be solved today!
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-5 w-[80%]">
            <div className="mt-2">
              <h3 className=" font-bold text-2xl">
                Find The Kth Largest Integer In The Array
              </h3>
              <div className="flex items-center gap-2 text-md text-muted-foreground  font-bold mt-1">
                <span>Leetcode</span>
                <div className="w-1 h-1 bg-gray-500 rounded-full "></div>
                <span>Medium</span>
                <div className="w-1 h-1 bg-gray-500 rounded-full "></div>
                <span>Sorting</span>
              </div>
            </div>

            <div className="flex flex-col max-w-[40%] gap-3 mt-4">
              <Button variant="outline" className="font-bold border-1 border-green-700 bg-transparent hover:bg-green-100 hover:cursor-pointer">
                <LuExternalLink className="w-4 h-4 mr-2 font-bold" />
                Solve It Now
              </Button>
              <Button
                variant="ghost"
                className="flex font-bold items-center gap-1 hover:bg-green-200 hover:cursor-pointer"
              >
                <span className="text-xl font-medium px-3 hover:bg-green-200 hover:cursor-pointer">+</span> New Solution
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-1 text-center">
            <p className="text-5xl font-bold">314</p>
            <p className="text-md font-bold">Solved it</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyProblemCard;
