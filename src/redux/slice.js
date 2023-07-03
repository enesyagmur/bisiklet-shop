import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "components",
  initialState: {
    componentState: [false, false, false],
  },
  reducers: {
    changeProfileStatus: (state) => {
      state.componentState[1] = false;
      state.componentState[2] = false;

      state.componentState[0] = !state.componentState[0];
    },
    changeSepetStatus: (state) => {
      state.componentState[0] = false;
      state.componentState[2] = false;

      state.componentState[1] = !state.componentState[1];
    },
    changeCategoryStatus: (state) => {
      state.componentState[1] = false;
      state.componentState[0] = false;
      state.componentState[2] = !state.componentState[2];
    },
  },
});

export const { changeProfileStatus, changeSepetStatus, changeCategoryStatus } =
  slice.actions;
export default slice.reducer;
