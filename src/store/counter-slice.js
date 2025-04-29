//1.1 splitting codes  for every slice

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState, // this points the above declared state
  reducers: {
    increment(state) {
      state.counter++; // redux toolkit clone the state and updates immutable way by internal package - imgur
    },
    decrement(state) {
      state.counter--;
    },
    increaseByValue(state, action) {
      state.counter = state.counter + action.payload; // payload is passed from other component
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export default counterSlice;
