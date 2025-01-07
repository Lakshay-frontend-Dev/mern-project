import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./sidebar/SideBar";

const DasboardLayout = () => {
  return (
    <div className="flex gap-60 xsm:gap-0 flex-col md:flex-row">
      <div>
        <SideBar />
      </div>
      <div className="md:m-3 sm:m-0 w-full">
        <Outlet className="overflow-scroll " />
      </div>
    </div>
  );
};

export default DasboardLayout;
