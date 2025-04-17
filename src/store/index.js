// //1.1 importing the createStore function from redux
// import { createStore } from "redux";

// //1.4 reducer function has exsisting state and action as parameter
// const counterReducer = (state = { counter: 0 }, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//     };
//   }
//     if (action.type === "decrement") {
//       return {
//         counter: state.counter - 1,
//       };
//     }
//     return state;
// };
// //1.2 declare the store
// //1.3 createStore points the reducer function as the parameter
// const store = createStore(counterReducer);

// //1.5 export store to other components
// export default store;

// //1.6 we have to provide this store to the top level component which is the App.js

//1--------------------------------------------------------------------------------------------

// import { createStore } from "redux";

// const counterReducer = (state = { counter: 0 }, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//     };
//   }
//     if (action.type === "decrement") {
//       return {
//         counter: state.counter - 1,
//       };
//     }
//     // 2.1 action and value
//     if(action.type === 'increase-by-value'){
//       return{
//         counter: state.counter + action.value
//       }
//     }
//     return state;
// };
// const store = createStore(counterReducer);

// export default store;

//2-------------------------------------------------

// //3.1 multiple state prop

// import { createStore } from "redux";

// //3.2
// const initialState = {
//   counter: 0,
//   showCounter: true,
// };
// //3.3 passing the initial state
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase-by-value") {
//     return {
//       counter: state.counter + action.value,
//       showCounter: state.showCounter,
//     };
//   }

//   //3.4
//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };
// const store = createStore(counterReducer);

// export default store;

//3--------------------------------------------------------------------------------

//4.1 using redux toolkit - npm install @reduxjs/toolkit

//4.4 we can get rid of the redux
// import { createStore } from "redux";

//4.5 in place of redux we can use the configureStore which
// merges multiple reducers to one
//4.2
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

//4.3 slice contains the global state with which we can multiple states
// 1)every slice have name as identity
// 2) initial state
// 3) reducers - object wchich contains the action methods
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
      state.counter = state.counter + action.value;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//4.6 using the configureStore
// this contains an object with global reducer which can contain single / multiple
// reducers from the number of slices used
const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
