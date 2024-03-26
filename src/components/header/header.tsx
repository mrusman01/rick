"use client";
import React from "react";
import Image from "next/image";

import Drawer from "./drawer";
import { headerLinks } from "@/constant";
import { StyledBtn } from "../styledComponent";
import { logo } from "../../../public/assets";

const Header = () => {
  return (
    <div>
      <div className="bg-[#8038E9] py-2">
        <p className="text-base font-normal text-center">
          🔥 $Rickcoin aims to expand the perception of memecoins. Get on board
          the rocket before it takes off.
        </p>
      </div>
      {/* */}
      <div className="mx-11 hidden md:flex items-center justify-between mt-4 ">
        <div className="min-w-fit md:min-w-[400px]">
          <StyledBtn
            text="CLAIM PRESALE"
            bgcolor="bg-[#A89AEF]"
            color="text-white"
          />
        </div>
        <Image src={logo} alt="rick" width={250} height={250} />

        <div className="gap-4 flex items-center">
          <StyledBtn
            text="SMART CONTRACT"
            bgcolor="bg-white"
            color="text-[#000000]"
          />
          <button className="text-lg font-bold uppercase tracking-wide w-[183px] h-[45px] rounded-full bg-[#8038E9]">
            BUY $RICK
          </button>
        </div>
      </div>

      {/* header item */}
      <div className="container mx-auto">
        <div className="hidden md:flex justify-center mt-5">
          <div className="flex items-center gap-8">
            {headerLinks.map((item: any) => {
              return (
                <button key={item} className="text-[22px] text-white font-bold">
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="container mx-auto px-4 flex md:hidden justify-between items-center">
        <Image src={logo} alt="rick" width={200} height={200} />
        <Drawer />
      </div>
    </div>
  );
};

export default Header;
