import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="text-black">
      <div className="text-center text-5xl font-semibold w-[85%] mx-auto">
        No more jumbling in sheets. Focus on your code, we'll keep track of {' '}
        <span className="text-[#25C05A] [text-shadow:0_0_15px_#25C05A,0_0_30px_#25C05A60]">
          everything.
        </span>
      </div>
      <p className="text-center pt-8 ">Empower Collaboration and Efficiency: Experience Seamless Educational Endeavors with the A2SV Hub, Your Centralized Solution for Streamlining Organization, Collaboration, and Knowledge Sharing.</p>
      <div className="pt-35 pb-20 flex justify-center">
        <Link href={'/login'} className='bg-[#25C05A] hover:bg-[#007B55] transition-colors text-white font-semibold    px-10 py-3 rounded-full'>Get Started Now {' >'}</Link>
      </div>
      
      {/* <BackgroundBeams className='width-[500px]' /> */}
    </div>
  );
};

export default Hero;
