import React from "react";
import logo from "@src/assets/ahtg-logo.png";
import { Tabs } from "@src/components/tabs";

export const Sidebar = () => {
  return (
    <div className="p-5 w-1/6 flex-row justify-center bg-[#f8f6f4] overflow-hidden h-screen">
      <div>
        <img className="mb-3 h-auto" src={logo} alt="logo" />
      </div>
      <Tabs />
    </div>
  );
};
