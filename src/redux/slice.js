import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "components",
  initialState: {
    componentState: [false, false, false],
    // 0. index profili - 1.index sepeti - 2.index categorileri temsil ediyor
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
    closeAllWindows: (state) => {
      state.componentState[0] = false;
      state.componentState[1] = false;
      state.componentState[2] = false;
    },
  },
});

export const {
  changeProfileStatus,
  changeSepetStatus,
  changeCategoryStatus,
  closeAllWindows,
} = slice.actions;
export default slice.reducer;
