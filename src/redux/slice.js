import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "components",
  initialState: {
    componentState: [false, false, false],
  },
  reducers: {
    changeProfileStatus: (state) => {
      state.componentState[0] = !state.componentState[0];
    },
  },
});

export const { changeProfileStatus } = slice.actions;
export default slice.reducer;
