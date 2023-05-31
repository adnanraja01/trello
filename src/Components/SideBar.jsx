import React from "react";

import SideElement from "./Reusable/SideElement";

import LayoutSvg from "../assets/svg/layout.svg";
import GridSvg from "../assets/svg/grid.svg";
import BarSvg from "../assets/svg/bar-chart.svg";
import ShareSvg from "../assets/svg/share.svg";

const SideBar = () => {
  return (
    <div className=" bg-black flex flex-col  min-h-screen w-[25rem] border-r border-r-grey  ">
      <div className="flex mb-[3rem] ml-[2.6rem] justify-start items-center gap-5 pt-[5rem]">
        <p className="text-white flex justify-center items-center text-s15 font-semibold rounded-full w-[3rem] h-[3rem] bg-[#3772FF]">
          AR
        </p>
        <h4 className="text-s24 text-white font-semibold">Adnaan</h4>
      </div>
      <div>
        <SideElement title="Home" src={GridSvg} />
        <SideElement title="Section 1" src={LayoutSvg} />
        <SideElement title="Section 2" src={BarSvg} />
        <SideElement title="Section 3" src={ShareSvg} />
      </div>
      <div className="flex justify-between items-end mx-[.6rem] mt-auto mb-[2rem] ">
        <div className="flex  items-center justify-between  gap-5 rounded-xl bg-grey px-[1.2rem] py-[1rem] ">
          <p className="text-white flex justify-center items-center text-s15 font-semibold rounded-full w-[3rem] h-[3rem] bg-[#3772FF]">
            AR
          </p>
          <p className="text-s14 text-white font-semibold">$ 90</p>
        </div>
        <div className="flex items-center justify-between gap-5 rounded-xl bg-grey px-[1.2rem] py-[1.4rem] ">
          <p className="text-s14 text-white font-semibold">Buy $XYZ</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
