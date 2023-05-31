import { createSlice } from "@reduxjs/toolkit";

const TodoListSlice = createSlice({
  name: "TodoList",
  initialState: { todoList: [] },
  reducers: {
    addTodo(state, action) {
      const newTodo = action.payload;
      const existingTodo = state.todoList.find(
        (item) => item.id === newTodo.id
      );
      if (!existingTodo) {
        // state.todoList.push({ todoId: newTodo.id, todoName: newTodo.name });
        state.todoList.push(action.payload);
      }
    },
    addTodoDetail(state, action) {
      state.todoList.forEach((item) => {
        console.log("eee");
        console.log(item.id);
        console.log(action.payload);

        if (item.id === action.payload.parentId) {
          if (Object.hasOwn(item, "children")) {
            item.children.push(action.payload);
          } else {
            item.children = [];
            item.children.push(action.payload);
          }
        }
      });
    },
    removeTodo(state, action) {
      const id = action.payload;
      const existingTodo = state.todoList.find((item) => item.id === id);
      if (existingTodo) {
        state.todoList = state.todoList.filter((item) => item.id !== id);
      }
    },
  },
});

export const TodoListActions = TodoListSlice.actions;
export default TodoListSlice;
