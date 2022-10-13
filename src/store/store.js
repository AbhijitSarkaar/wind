import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "App",
  initialState: {
    value: 12,
  },
  reducers: {},
});

const store = configureStore({
  reducer: slice.reducer,
});

export default store;
