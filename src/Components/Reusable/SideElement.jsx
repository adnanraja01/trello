import React from "react";

const SideElement = (props) => {
  return (
    <div
      className={`${props.className} rounded-[1.2rem]  px-[1.2rem] py-[1.2rem] bg-white flex items-center gap-[2.2rem] my-[1rem] mx-[.6rem] cursor-pointer`}
    >
      <img className="h-[3rem]" src={props.src} alt="icon" />
      <h4 className="text-s14 text-[#808191] font-semibold">{props.title}</h4>
    </div>
  );
};

export default SideElement;
