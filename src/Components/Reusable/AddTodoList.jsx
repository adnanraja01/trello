import React, { useState } from "react";
import PlusSvg from "../../assets/svg/plus.svg";
import { useDispatch } from "react-redux";
import { TodoListActions } from "../../Store/ListTodoSlice";

const AddTodoList = () => {
  const dispatch = useDispatch();
  const [Todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      TodoListActions.addTodo({
        id: Math.random(),
        name: Todo,
      })
    );
    setTodo("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="px-[1rem] flex justify-between items-center h-[5rem]   w-[27rem] rounded-lg bg-[#242731] py-[.7rem]  mt-[2rem] text-s16"
    >
      <input
        className="text-white bg-transparent w-4/5"
        placeholder="Add Todo List"
        onChange={(e) => setTodo(e.target.value)}
        value={Todo}
        required
      />
      <button
        className="bg-grey w-[3rem] h-[3rem] flex justify-center items-center rounded-full"
        type="submit"
      >
        <img
          className="w-[2rem] h-[2rem]"
          src={PlusSvg}
          alt="edit"
          type="submit"
        />
      </button>
    </form>
  );
};

export default AddTodoList;
