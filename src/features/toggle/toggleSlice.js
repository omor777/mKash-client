import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleSidebar(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSidebar } = toggleSlice.actions;

export default toggleSlice.reducer;
