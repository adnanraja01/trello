import React from "react";
import ListHead from "../Components/Reusable/ListHead";
import ListTodo from "../Components/Reusable/ListTodo";
import AddTodo from "../Components/Reusable/AddTodo";
import AddTodoList from "../Components/Reusable/AddTodoList";
import EditTodo from "../Components/EditTodo";
import { useSelector } from "react-redux";

const Main = () => {
  const showEdit = useSelector((state) => state.showEdit.editIsVisible);
  const TodoList = useSelector((state) => state.TodoList.todoList);
  return (
    <div className=" w-full min-h-[94vh] bg-black">
      <div className="py-[1rem] border-b border-b-grey ">
        <p className="text-white ml-[3rem] text-s14">Adnan</p>
      </div>
      <div className="flex justify-between">
        <div
          className={`${
            showEdit ? "w-5/6" : "w-full "
          } bg-[black] overflow-x-auto border-r h-[87vh] border-r-grey grid grid-cols-1 justify-items-start gap-x-5 mx-3`}
        >
          <div className="flex justify- items-start gap-x-5">
            {TodoList?.map((List) => (
              <div>
                <ListHead key={List.id} title={List.name} />
                <AddTodo parentId={List.id} />

                {List?.children?.map((data) => (
                  <ListTodo
                    key={data?.id}
                    title={data?.title}
                    info={data?.info}
                  />
                ))}
              </div>
            ))}
            <AddTodoList />
          </div>
        </div>
        {showEdit && (
          <div className={` bg-black w-1/4`}>
            <EditTodo />
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
