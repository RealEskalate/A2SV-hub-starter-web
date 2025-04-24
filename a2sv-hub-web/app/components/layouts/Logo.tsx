import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <main className="flex items-center justify-center  bg-white">
      <div className={cn("flex items-center space-x-2")}>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-[12px] p-2 w-10 h-10">
         <Image src="/africa.png" alt="User profile" width={45} height={45} className="rounded-full" />
        </div>

        <div className="flex text-3xl font-semibold text-green-600">HUB</div>
      </div>
    </main>
  );
};

export default Logo;
