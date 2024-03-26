import { headerLinks } from "@/constant";
import Image from "next/image";
import React, { useState } from "react";
import { logo } from "../../../public/assets";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <input
        type="checkbox"
        id="drawer-toggle"
        className="sr-only peer"
        checked={isOpen}
        onChange={toggleDrawer}
      />
      <label
        htmlFor="drawer-toggle"
        className="inline-block p-4 transition-all duration-500 bg-[#8038E9] rounded-lg cursor-pointer"
      >
        <div
          className={`w-8 h-1 mb-3 ${
            isOpen ? "-rotate-45" : "rotate-0"
          } bg-white rounded-lg`}
        ></div>
        <div
          className={`w-8 h-1 ${
            isOpen ? "rotate-45" : "rotate-0"
          } bg-white rounded-lg`}
        ></div>
      </label>
      <div
        className={`fixed top-0 left-0 z-20 w-72 h-full transition-all duration-500 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } bg-[#000] shadow-lg`}
      >
        <div className="px-6 py-4 flex flex-col items-center justify-center">
          <div className="flex items-center justify-between">

          <Image
            src={logo}
            alt="rick"
            width={120}
            height={120}
            className="mt-7"
            />
          {/* <button onClick={()=>setIsOpen(false)}>close</button> */}
          <label
        htmlFor="drawer-toggle"
        className="inline-block p-4 transition-all duration-500 bg-[#8038E9] rounded-lg cursor-pointer"
      >
        <div
          className={`w-5 h-1 mb-3 ${
            isOpen ? "-rotate-45" : "rotate-0"
          } bg-white rounded-lg`}
        ></div>
        <div
          className={`w-5 h-1 ${
            isOpen ? "rotate-45" : "rotate-0"
          } bg-white rounded-lg`}
        ></div>
      </label>
          </div>

          <div className="flex flex-col items-start gap-4 mt-9">
            {headerLinks.map((item: any) => {
              return (
                <button key={item} className="text-xl text-white font-bold">
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
