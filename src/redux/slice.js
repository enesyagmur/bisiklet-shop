import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "components",
  initialState: {
    componentState: [false, false, false],
  },
  reducers: {
    changeProfileStatus: (state) => {
      if (
        state.componentState[1] === true ||
        state.componentState[2] === true
      ) {
        state.componentState[1] = !state.componentState[1];
        state.componentState[2] = !state.componentState[2];
      }
      state.componentState[0] = !state.componentState[0];
    },
    changeSepetStatus: (state) => {
      if (
        state.componentState[0] === true ||
        state.componentState[2] === true
      ) {
        state.componentState[0] = !state.componentState[0];
        state.componentState[2] = !state.componentState[2];
      }
      state.componentState[1] = !state.componentState[1];
    },
    changeCategoryStatus: (state) => {
      if (
        state.componentState[1] === true ||
        state.componentState[0] === true
      ) {
        state.componentState[1] = !state.componentState[1];
        state.componentState[0] = !state.componentState[0];
      }
      state.componentState[2] = !state.componentState[2];
    },
  },
});

export const { changeProfileStatus, changeSepetStatus, changeCategoryStatus } =
  slice.actions;
export default slice.reducer;
