import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "components",
  initialState: {
    componentState: [{ profile: false }, { sepet: false }, { category: false }],
  },
  reducers: {
    changeComponentState: (state, action) => {
      state[action.payload].profile = !state[action.payload].profile;
    },
  },
});

export const { changeComponentState } = slice.actions;
export default slice.reducer;
