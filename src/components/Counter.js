import classes from "./Counter.module.css";
// 1.1 using the useSelector -> by which we can use req part of the redux state
// and it automatically set uup a subscription of redux store to this component\\
//1.5 using the useDispatch to dispatch the actions
import { useSelector, useDispatch} from "react-redux";

const Counter = () => {
  //1.2 getiing the counter state from the store
  const counter = useSelector(state => state.counter);

  //1.6 setting the dispatch function
  const dispatch = useDispatch()

  const toggleCounterHandler = () => {};

  //1.7 actions are dispatched
  const incrementHandler =()=>{
    dispatch({type:'increment'})
  }
  const decrementHandler =()=>{
    dispatch({type:'decrement'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* 1.3 using the counter value  */}
      <div className={classes.value}>{counter}</div>
      <div>
       {/* 1.4 button to dispatch counter actions  */}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
