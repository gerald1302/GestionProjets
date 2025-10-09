import React from "react";
import { FaTachometerAlt, FaTasks, FaUserAlt, FaBell } from "react-icons/fa";

const SidebarChef = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-full md:w-1/4 bg-white shadow-md rounded-xl p-4 mb-8 md:mb-0">
      <ul className="space-y-4">
        <li
          onClick={() => setActiveTab("dashboard")}
          className={`flex items-center gap-3 p-3 rounded-2xl cursor-pointer ${
            activeTab === "dashboard"
              ? "bg-black text-white"
              : "hover:bg-black hover:text-white"
          }`}
        >
          <FaTachometerAlt /> Tableau de bord
        </li>

        <li
          onClick={() => setActiveTab("taches")}
          className={`flex items-center gap-3 p-3 rounded-2xl cursor-pointer ${
            activeTab === "taches"
              ? "bg-black text-white"
              : "hover:bg-black hover:text-white"
          }`}
        >
          <FaTasks /> Tâches
        </li>

        <li
          onClick={() => setActiveTab("notifications")}
          className={`flex items-center gap-3 p-3 rounded-2xl cursor-pointer ${
            activeTab === "notifications"
              ? "bg-black text-white"
              : "hover:bg-black hover:text-white"
          }`}
        >
          <FaBell /> Notifications
        </li>

        <li
          onClick={() => setActiveTab("profile")}
          className={`flex items-center gap-3 p-3 rounded-2xl cursor-pointer ${
            activeTab === "profile"
              ? "bg-black text-white"
              : "hover:bg-black hover:text-white"
          }`}
        >
          <FaUserAlt /> Profil
        </li>
      </ul>
    </div>
  );
};

export default SidebarChef;
