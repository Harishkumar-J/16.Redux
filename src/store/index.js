//1.1 importing the createStore function from redux
import { createStore } from "redux";

//1.4 reducer function has exsisting state and action as parameter
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
    if (action.type === "decrement") {
      return {
        counter: state.counter - 1,
      };
    }
    return state;
};
//1.2 declare the store
//1.3 createStore points the reducer function as the parameter
const store = createStore(counterReducer);



//1.5 export store to other components
export default store;

//1.6 we have to provide this store to the top level component which is the App.js