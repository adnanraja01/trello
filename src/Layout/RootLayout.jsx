import React from "react";
import SideBar from "../Components/SideBar";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const RootLayout = () => {
  return (
    <div className="flex w-[100vw]">
      <SideBar />
      <div className="w-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
