import classes from "./Counter.module.css";
// 1.1 using the useSelector -> by which we can use req part of the redux state
// and it automatically set uup a subscription of redux store to this component\
import { useSelector } from "react-redux";

const Counter = () => {
  //1.2 getiing the counter state from the store
  const counter = useSelector(state => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
