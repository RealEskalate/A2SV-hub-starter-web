import React from "react";
import NavBar from "./navBar";
import { BackgroundBeams } from "../components/ui/background-beams";
import Hero from "./Hero";
import Image from "next/image";
import Features from "./features";

const LandingPage = () => {
  return (
    <div className="bg-[#FBFAF2] text-black ">
      <div className="w-[90%] mx-auto pt-5 min-h-screen">
        <NavBar />
        <div className="pt-46">
          <Hero />
          <Image src={"/hub_home.svg"} alt={"hub"} height={1200} width={1200} />
        </div>
        <div className="text-center text-3xl font-semibold w-[85%] mx-auto">
          Level up your education phase{" "}
          <span className="text-[#25C05A] [text-shadow:0_0_15px_#25C05A,0_0_30px_#25C05A60]">
            a step head.
          </span>
        </div>
        <p className="pt-5 pb-10 text-center">
          Elevate Your Learning Journey: Discover the Next Level of Education
          with Enhanced Features
        </p>
        <Features />
        <p className="text-center py-5 text-gray-500">
          Continuously Enhancing Your Experience: Our Commitment to Innovation
          Means We're Hard at Work Developing and Integrating a Host of Exciting
          New Features, Stay Tuned for Even More Ways to Elevate Your Journey.
        </p>
        <div className="py-12" id="about">
          <p className="text-4xl font-bold text-center">
            About{"   "}
            <span className="text-[#25C05A] [text-shadow:0_0_15px_#25C05A,0_0_30px_#25C05A60]">
              A2SV
            </span>
          </p>
          <p className="text-center pt-10">
            African to Silicon Valley is a non-profit organization committed to
            educating high-potential university students in Africa. We establish
            valuable partnerships with top tech companies like Google, Palantir,
            Databricks, Bloomberg, and Meta, offering our students opportunities
            in Silicon Valley. Our free program equips students with problem
            solving skills and encourages them to address critical issues in
            their home countries using digital solutions. By removing financial
            barriers, we ensure that talent is not only recognized but also
            nurtured, promoting a pathway to success.
          </p>
        </div>
        <Image 
            src={"/a2sv.png"}
            alt=''
            height={500}
            width={1200}
        />
      </div>
    </div>
  );
};

export default LandingPage;
