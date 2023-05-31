import { configureStore } from "@reduxjs/toolkit";
import showEditSlice from "./showEditSlice";
import TodoListSlice from "./ListTodoSlice";
import TodoSlice from "./TodoSlice";

const store = configureStore({
  reducer: {
    showEdit: showEditSlice.reducer,
    TodoList: TodoListSlice.reducer,
    Todo: TodoSlice.reducer,
  },
});

export default store;
