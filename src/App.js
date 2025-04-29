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

function App() {
 const isAuth = useSelector(state => state.auth.isAuthenticateed)


  return (
    <>
      <Header />
      {/* 1.4 */}
      {!isAuth && <Auth />}
      {isAuth && <UserProfile/>}
      <Counter />
    </>
  );
}

export default App;
