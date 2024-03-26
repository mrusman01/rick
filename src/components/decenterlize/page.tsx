import { DecenterlizedCards } from "@/constant";
import Image from "next/image";
import React from "react";

const Decenterlized = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-center">
        <Image
          src="/decenterlizeImg.svg"
          alt="monster"
          width={150}
          height={150}
        />
      </div>
      <p className="text-2xl text-[#a89aef] text-center font-normal mt-4">
        A vibrant decentralized community
      </p>

      <div className="flex justify-center flex-col items-center mt-3">
        <p className="text-4xl md:text-6xl text-white font-extrabold  text-center w-fit md:w-4/5">
          Rickcoin: The ultimate Dao & Finance project
        </p>
        <p className="text-xl text-[#eeedf8] text-center font-extralight mt-4  w-fit md:w-4/5">
          Dive into Rickcoin, enjoy web3 decentralization, where each member has
          the same power of choice, freedom, and justice. We aim to transform
          perspectives by offering greater decision-making power to our
          community.
        </p>
      </div>

      <div className="container mx-auto px-3 flex items-center md:justify-between justify-center gap-5 flex-wrap mt-5">
        {DecenterlizedCards.map((item, i) => {
          return (
            <div
              key={i}
              className="md:w-96 w-full md:h-44 h-40 bg-[#8038e9] text-white rounded-3xl p-6"
            >
              <p className="text-[#eeedf8] font-black md:text-2xl text-xl">{item.title}</p>
              <p className="text-[#eeedf8] font-normal md:text-base text-[13px] mt-1">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Decenterlized;
