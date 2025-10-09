import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoMdNotifications } from "react-icons/io";

const TopBarChef = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="text-2xl font-bold">Chef de Projet Dashboard</div>

      <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl shadow-md">
        <input
          type="text"
          placeholder="Rechercher..."
          className="border px-4 py-2 rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="p-2 rounded-full bg-gray-500 text-white hover:bg-gray-300 transition">
          <CgProfile size={24} />
        </button>

        <button className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition">
          <IoMdNotifications size={24} />
        </button>
      </div>
    </div>
  );
};

export default TopBarChef;
