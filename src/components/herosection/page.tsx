"use client";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="container-md mx-auto px-4 md:px-0 min-w-0">
      <div className="flex justify-center min-w-0">
        <p className="text-4xl md:text-6xl text-white font-extrabold mt-36 text-center w-fit md:w-[55%]">
          Rickcoin: The ultimate Dao & Finance project
        </p>
      </div>

      <div className="flex justify-center flex-col items-center min-w-0">
        <p className="md:text-2xl text-lg text-[#eeedf8] my-6 text-center w-fit md:w-3/5 min-w-0">
          The first memecoin with real utility,{" "}
          <span style={{ fontWeight: "bold" }}>
            The ultimate DAO & Finance project
          </span>
          , a token that seeks to make a difference and mark a before and after.
          Join this amazing community now 🔥
        </p>

        <p className="md:text-lg text-xs font-normal truncate  min-w-14">
          CA: 0x7552742DFCCc8D0b13463ec9......
        </p>


        <div className="mt-5 flex  md:flex-row flex-col items-center gap-5">
          <button className="bg-[#00CCBE] text-base w-[200px] h-[45px] text-white font-extrabold rounded-[50px]">
            CHART 🚀
          </button>

          <button className="rounded-[50px]  text-sm font-extrabold tracking-[2px] bg-white text-black w-[300px] h-[45px]">
            BUY $RICK PANCAKESWAP
          </button>
        </div>
        <div className="mt-5 flex items-center gap-2">
          {" "}
          <Image
            src="/verifyIcon.svg"
            alt="verfiy"
            width={30}
            height={30}
          />{" "}
          Project verified by BscScan
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
