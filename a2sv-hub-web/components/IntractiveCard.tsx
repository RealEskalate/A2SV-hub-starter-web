import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Star, BarChart3, Link2, User, Layers } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";
import Image from "next/image";
function IntractiveCard() {
  const linkData = ["https://github.com", "https://linkedin.com", "https://instagram.com", "https://t.me" ,"https://codeforces.com", "https://leetcode.com"];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 ml-20 mr-10">
      {/* Rating & Problems */}
      <Card className="transition-all  dark:hover:shadow-neutral-700 hover:bg-gray-200 transform hover:scale-105 shadow-md">
        <CardContent className="flex items-center justify-between p-10">
          <div className="flex items-center gap-4">
            <Star className="text-yellow-500" />
            <div>
              <h1 className="text-xl font-bold">1152</h1>
              <p className="text-sm text-gray-500">Rating</p>
            </div>
          </div>
          <div className="h-20 w-px bg-gray-200 dark:bg-gray-700"></div>
          <div className="flex items-center gap-4">
            <BarChart3 className="text-blue-500" />
            <div>
              <h1 className="text-xl font-bold">970</h1>
              <p className="text-sm text-gray-500">Problems</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* About Card */}
      <Card className="transition-all  dark:hover:shadow-neutral-700 hover:bg-gray-200 transform hover:scale-105 shadow-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold">About</CardTitle>
        </CardHeader>
        <CardContent className="px-6 pb-6 text-sm text-gray-600 dark:text-gray-400">
          This stats card elegantly displays key metrics side-by-side for quick
          insight. Clear visual separation ensures readability without clutter,
          ideal for dashboards and summaries.
        </CardContent>
      </Card>

      {/* Link Card */}
      <Card className="transition-all  dark:hover:shadow-neutral-700 hover:bg-gray-200 transform hover:scale-105 shadow-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-semibold">Links</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap  flex-col justify-center gap-4 p-4 text-gray-600 dark:text-gray-400">
        {/* LinkedIn */}
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition flex flex-row gap-4">
          <FaLinkedin size={15} />
          <p className="text-xs">    Linkedin: {linkData[1]} </p>
        </a>
        {/* GitHub */}
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition flex flex-row gap-4">
          <FaGithub size={15} />
          <p className="text-xs">    Github: {linkData[0]} </p>
        </a>
        {/* Instagram */}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition flex flex-row  gap-4">
          <FaInstagram size={15} />
          <p className="text-xs">    instagram: {linkData[2]} </p>
        </a>
        {/* Telegram */}
        <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition flex flex-row gap-4">
          <FaTelegram size={15} />
          <p className="text-xs">    Telegram:  {linkData[3]}</p>
        </a>
        {/* Codeforces */}
        <a href="https://codeforces.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition flex flex-row gap-4">
          <Image src="/icons/codeforce.png" alt="Codeforces" width={15} height={15} className="object-contain" />
          <p className="text-xs">  Codeforces:  {linkData[4]}</p>
        </a>
        {/* LeetCode */}
        <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition flex flex-row gap-4">
          <Image src="/icons/leetcode.webp" alt="LeetCode" width={15} height={15} />
          <p className="text-xs">    Leetcode: {linkData[5]}</p>
        </a>
      </CardContent>
    </Card>

      {/* Profile Snapshot */}
      <Card className="transition-all  dark:hover:shadow-neutral-700 hover:bg-gray-200 transform hover:scale-105 shadow-md">
        <CardContent className="flex flex-col items-center gap-4 p-6">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div className="mt-20">
            <h1 className="font-bold text-lg">Solver II · 1151</h1>
            <p className="text-sm text-gray-500">Next: Solver I</p>
          </div>
        </CardContent>
      </Card>

      {/* Division Card */}
      <Card className="transition-all  dark:hover:shadow-neutral-700 hover:bg-gray-200 transform hover:scale-105 shadow-md">
        <CardContent className="flex  flex-col items-center gap-4 p-6">
          <Layers className="text-purple-500" />
          <div>
            <h1 className="font-bold text-lg">Div 3</h1>
            <p className="text-sm text-gray-500">Division III</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default IntractiveCard;
