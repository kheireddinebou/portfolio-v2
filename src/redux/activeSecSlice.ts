import { createSlice } from "@reduxjs/toolkit";

const sectionId = window.location.hash.substring(1);

export interface InitialStateType {
  activeSec: string;
}

const initialState: InitialStateType = {
  activeSec: sectionId || "about",
};

const activeSecSlice = createSlice({
  name: "activeSec",
  initialState,
  reducers: {
    setActiveSec: (state, action) => {
      state.activeSec = action.payload;
    },
  },
});

export const { setActiveSec } = activeSecSlice.actions;
export default activeSecSlice.reducer;
