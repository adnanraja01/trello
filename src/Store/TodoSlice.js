// import { createSlice } from "@reduxjs/toolkit";

// const TodoSlice = createSlice({
//   name: "Todo",
//   initialState: { todo: [] },
//   reducers: {
//     addTodo(state, action) {
//       const newTodo = action.payload;
//       const existingTodo = state.todo.find((item) => item.id === newTodo.id);
//       // if (!existingTodo) {
//       //   state.todo.push({
//       //     todoId: newTodo.id,
//       //     todoName: newTodo.title,
//       //     todoInfo: newTodo.info,
//       //   });
//       // }
//     },
//     removeTodo(state, action) {
//       const id = action.payload;
//       const existingTodo = state.todo.find((item) => item.id === id);
//       if (existingTodo) {
//         state.todo = state.todo.filter((item) => item.id !== id);
//       }
//     },
//   },
// });
// export const TodoActions = TodoSlice.actions;
// export default TodoSlice;
