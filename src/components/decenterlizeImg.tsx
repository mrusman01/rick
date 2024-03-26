import React from "react";

const DecenterlizeImg = () => {
  return (
    <div className="w-full py-11">
      <div
        style={{
          clipPath:
            "polygon(0 12%, 52% 0, 100% 12%, 100% 100%, 51% 92%, 0 100%)",
            // backgroundImage:
            // "linear-gradient(rgba(16, 12, 10, 0.41), rgba(16, 12, 10, 0.41))"
        }}
      >
        <div className='w-full min-h-[300px] bg-[url("/bg-1.svg")] bg-cover bg-center bg-no-repeat bg-fixed'></div>
      </div>
    </div>
  );
};

export default DecenterlizeImg;
