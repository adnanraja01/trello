import React from "react";
import leftArrow from "../assets/svg/leftArrow.svg";
import { EditActions } from "../Store/showEditSlice";
import { useDispatch } from "react-redux";

const EditTodo = () => {
  const dispatch = useDispatch();
  const toggleEditHandler = (e) => {
    e.preventDefault();
    dispatch(EditActions.toggle());
  };

  return (
    <form className="w-full">
      <div className="flex items-center gap-5 p-8 pl-10">
        <button onClick={toggleEditHandler}>
          <img src={leftArrow} alt="left Arrow" />
        </button>
        <h4 className="text-white text-s18 font-medium">Edit Todo</h4>
      </div>
      <div className="px-[1rem] py-[1rem] bg-[#242731] mx-[1.8rem] rounded-xl mb-[1rem]">
        <input
          className="text-[#A6A6A6] w-full bg-transparent text-s20 font-bold"
          placeholder="Carrot"
        />
      </div>
      <div className="px-[1rem] py-[1rem] bg-[#242731] mx-[1.8rem] rounded-xl mb-[2rem]">
        <textarea
          className="text-[#808191] h-[11rem] p-2  w-full bg-transparent text-s14 font-medium resize-none"
          placeholder="Carrot"
        />
      </div>
      <button className="mx-[1.8rem] w-[85%] px-[1.5rem] py-[1.2rem] bg-[#3772FF] text-white text-s16 rounded-xl">
        Save
      </button>
    </form>
  );
};

export default EditTodo;
