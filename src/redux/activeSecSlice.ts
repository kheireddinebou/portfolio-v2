import { createSlice } from "@reduxjs/toolkit";

export interface InitialStateType {
  activeSec: string;
}

const initialState: InitialStateType = {
  activeSec: "about",
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
