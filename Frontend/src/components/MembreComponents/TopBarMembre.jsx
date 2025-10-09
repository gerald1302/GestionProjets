import React from "react";

const TopBarMembre = () => {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold text-gray-700">Tableau de bord Membre</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Bonjour, <b>Jean</b></span>
        <img
          src="https://i.pravatar.cc/40?img=12"
          alt="profile"
          className="rounded-full w-10 h-10 border"
        />
      </div>
    </header>
  );
};

export default TopBarMembre;
