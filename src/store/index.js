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

//3.1 multiple state prop

import { createStore } from "redux";

//3.2
const initialState = {
  counter: 0,
  showCounter: true,
};
//3.3 passing the initial state
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "increase-by-value") {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter,
    };
  }

  //3.4
  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
  return state;
};
const store = createStore(counterReducer);

export default store;
