import React from "react";
import Svg from "../../assets/svg/check-circle.svg";
import PencilSvg from "../../assets/svg/pencil.svg";

const ListTodo = (props) => {
  return (
    <div className="p-5 w-auto h-[11.6rem] rounded-lg bg-[#191B20] mt-[2rem] text-white text-s16">
      <div className="flex justify-between items-center gap-5 mb-[1rem]">
        <div className="flex justify-center items-center gap-3">
          <div className="bg-grey w-[3.6rem] h-[3.6rem] flex justify-center items-center rounded-full">
            <img className="w-[2rem] h-[2rem]" src={Svg} alt="todo list" />
          </div>
          <p className="text-s18  font-medium">{props.title} </p>
        </div>
        <button className="bg-grey w-[3.6rem] h-[3.6rem] flex justify-center items-center rounded-full">
          <img className="w-[2rem] h-[2rem]" src={PencilSvg} alt="edit" />
        </button>
      </div>
      <p className="text-s16 text-[#808191] pb-[1rem] ">{props.info}</p>
    </div>
  );
};

export default ListTodo;
