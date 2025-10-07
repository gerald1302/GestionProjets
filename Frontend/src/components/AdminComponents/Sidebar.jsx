// src/components/Sidebar.jsx
import React from "react";
import { FaGraduationCap, FaHistory, FaLaptopCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-full md:w-1/4 bg-white shadow-md rounded-xl p-4 mb-8 md:mb-0">
      <ul className="space-y-4">
        <li
          onClick={() => setActiveTab("dashboard")}
          className={`flex items-center gap-3 p-3 rounded-2xl cursor-pointer ${
            activeTab === "dashboard" ? "bg-black text-white" : "hover:bg-black hover:text-white"
          }`}
        >
          <FaGraduationCap /> Dashboard
        </li>
        <li
          onClick={() => setActiveTab("profile")}
          className={`flex items-center gap-3 p-3 rounded-2xl cursor-pointer ${
            activeTab === "profile" ? "bg-black text-white" : "hover:bg-black hover:text-white"
          }`}
        >
          <FaHistory /> Profile
        </li>
        <li
          onClick={() => setActiveTab("tables")}
          className={`flex items-center gap-3 p-3 rounded-2xl cursor-pointer ${
            activeTab === "tables" ? "bg-black text-white" : "hover:bg-black hover:text-white"
          }`}
        >
          <FaLaptopCode /> Tables
        </li>
        <li
          onClick={() => setActiveTab("notifications")}
          className={`flex items-center gap-3 p-3 rounded-2xl cursor-pointer ${
            activeTab === "notifications" ? "bg-black text-white" : "hover:bg-black hover:text-white"
          }`}
        >
          <FaPaintBrush /> Notifications
        </li>
      </ul>

      <h1 className="mt-6 font-bold text-gray-700">AUTH PAGES</h1>
      <ul className="space-y-4 mt-4">
        <li
          onClick={() => setActiveTab("auth-notifications")}
          className={`flex items-center gap-3 p-3 rounded-2xl cursor-pointer ${
            activeTab === "auth-notifications" ? "bg-black text-white" : "hover:bg-black hover:text-white"
          }`}
        >
          <FaPaintBrush /> Auth Notifications
        </li>
        <li
          onClick={() => setActiveTab("mobile")}
          className={`flex items-center gap-3 p-3 rounded-2xl cursor-pointer ${
            activeTab === "mobile" ? "bg-black text-white" : "hover:bg-black hover:text-white"
          }`}
        >
          <FaMobileAlt /> Mobile Skills
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
