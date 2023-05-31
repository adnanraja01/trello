import React, { useState } from "react";
import Svg from "../../assets/svg/check-circle.svg";
import PlusSvg from "../../assets/svg/plus.svg";
// import { TodoActions } from "../../Store/TodoSlice";
import { TodoListActions } from "../../Store/ListTodoSlice";
import { useDispatch } from "react-redux";

const AddTodo = ({ parentId }) => {
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDetail, setTodoDetail] = useState("");

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    dispatch(
      TodoListActions.addTodoDetail({
        id: Math.random(),
        parentId: parentId,
        title: todoTitle,
        info: todoDetail,
      })
    );
    setTodoTitle("");
    setTodoDetail("");
  };
  return (
    <form
      onSubmit={handleTodoSubmit}
      className="px-5 pt-5  rounded-lg bg-[#191B20] mt-[2rem] text-white text-s16"
    >
      <div className="flex justify-between items-center gap-5 mb-[1rem]">
        <div className="flex justify-center items-center gap-3">
          <div className="bg-grey w-[3.6rem] h-[3.6rem] flex justify-center items-center rounded-full">
            <img className="w-[2rem] h-[2rem]" src={Svg} alt="todo list" />
          </div>
          <input
            onChange={(e) => setTodoTitle(e.target.value)}
            value={todoTitle}
            className="text-s18 bg-transparent w-[15rem] text-[#6E6E6E]  font-medium"
            placeholder="Add Todo"
            required
          />
        </div>
        <button className="bg-grey w-[3.6rem] h-[3.6rem] flex justify-center items-center rounded-full">
          <img className="w-[2rem] h-[2rem]" src={PlusSvg} alt="edit" />
        </button>
      </div>
      <textarea
        onChange={(e) => setTodoDetail(e.target.value)}
        value={todoDetail}
        className="resize-none text-s16 text-[#808191] bg-transparent "
        placeholder="Add Todo Description"
        required
      />
    </form>
  );
};

export default AddTodo;
