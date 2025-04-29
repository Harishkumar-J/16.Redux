// import Counter from './components/Counter';

// function App() {
//   return (
//     <Counter />
//   );
// }

// export default App;

//----------------------------------------------------------

//1.1 working with multiple slice
import Counter from "./components/Counter";

//1.2 including the other components into main component
// if not authenticated we need to show auth page,,,otherwise
// render the userprofile component

import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from './components/UserProfile'

// 1.3 to read the data from the store
import { useSelector } from "react-redux";
import { Fragment } from "react";

function App() {
 const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
 console.log(isAuthenticated)

  return (
    <>
      <Header />
      {/* 1.4 */}
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile/>}
      <Counter />
    </>
  );
}

export default App;
