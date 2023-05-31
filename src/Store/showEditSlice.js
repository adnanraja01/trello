import { createSlice } from "@reduxjs/toolkit";

const showEditSlice = createSlice({
  name: "showEdit",
  initialState: { editIsVisible: true },
  reducers: {
    toggle(state) {
      state.editIsVisible = !state.editIsVisible;
    },
  },
});
export const EditActions = showEditSlice.actions;
export default showEditSlice;
