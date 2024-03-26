import React, { useState } from 'react';

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
        <div className={`w-6 h-1 mb-3 ${isOpen ? '-rotate-45' : 'rotate-0'} bg-white rounded-lg`}></div>
        <div className={`w-6 h-1 ${isOpen ? 'rotate-45' : 'rotate-0'} bg-white rounded-lg`}></div>
      </label>
      <div
        className={`fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-white shadow-lg`}
      >
        <div className="px-6 py-4">
          <h2 className="text-lg font-semibold">Drawer</h2>
          <p className="text-gray-500">This is a drawer.</p>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
