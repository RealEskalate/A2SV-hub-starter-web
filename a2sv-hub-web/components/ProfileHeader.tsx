"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, UserSquare, Check, BookOpen } from "lucide-react";
import Attendance from "@/components/Attendance";
import ConsistencyChart from "@/components/ConsistencyChart";
import IntractiveCard from "@/components/IntractiveCard";
import Problems from "@/components/Problems";
import Submissions from "@/components/Submissions";
import Contests from "@/components/Contests";

function ProfileHeader() {
  const [activeTab, setActiveTab] = useState("profile");

  const TABS = [
    { key: "profile", label: "Profile", icon: <UserSquare className="w-4 h-4" /> },
    { key: "problems", label: "Problems", icon: <BookOpen className="w-4 h-4" /> },
    { key: "submissions", label: "Submissions", icon: <Check className="w-4 h-4" /> },
    { key: "contests", label: "Contests", icon: <Award className="w-4 h-4" /> },
  ];

  const renderDefaultContent = () => (
    <div className="flex-1 flex flex-col p-6 space-y-6">
      <ConsistencyChart />
      <Attendance />
      <IntractiveCard />
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "problems":
        return <Problems />;
      case "submissions":
        return <Submissions />;
      case "contests":
        return <Contests />;
      case "profile":
      default:
        return renderDefaultContent();
    }
  };

  return (
    <div className="">
      <h1 className="font-bold ml-70 mt-10">Profile</h1>
      <h2 className="text-sm text-black/80 mt-2 mb-5 ml-70">
        Users <span className="text-gray-500">. Yohannes Mengistie Kindu</span>
      </h2>

      {/* Main Profile Card */}
      <div className="relative transition-all hover:shadow-lg dark:hover:shadow-neutral-700 h-56 rounded-xl bg-gradient-to-r from-emerald-700 via-green-500 to-emerald-700 p-6 text-white flex items-center space-x-4 shadow-xl overflow-hidden ml-70 mr-15">
        <div className="absolute bottom-0 left-0 right-0 h-[45px] bg-white z-10 m-0" />

        <Avatar className="w-24 h-24 border-4 border-white shadow-md mt-20 z-20">
          <AvatarImage src="/assets/image/profile.webp" alt="Yohannes" />
          <AvatarFallback>YM</AvatarFallback>
        </Avatar>

        <div className="mt-20 z-20 space-y-1">
          <h2 className="text-2xl font-bold text-white-500">Yohannes Mengistie Kindu</h2>
          <div className="flex items-center gap-1.5">
            <span className="text-sm text-gray-200">Student</span>
            <span
              className="relative flex items-center gap-1 text-xs font-medium text-sky-500"
              aria-label="Online"
            >
              Online
              <span className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75 duration-1000"></span>
                <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
              </span>
            </span>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-1 gap-4 ml-130 z-50 flex justify-between px-4">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center space-x-2 text-sm text-black hover:text-emerald-600 transition ${
        activeTab === tab.key 
          ? 'underline decoration-2 decoration-green-500 underline-offset-4' 
          : ''
      }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Content */}
      <div className="ml-40 mt-6">{renderContent()}</div>
    </div>
  );
}

export default ProfileHeader;
