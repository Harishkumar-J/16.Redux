import classes from "./Header.module.css";
//1.2
import { useSelector } from "react-redux";
// 1.6
import { authActions } from "../store/index";
import { useDispatch } from "react-redux";

const Header = () => {
  //1.3
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

//1.5
const dispatch = useDispatch()
const logoutHandler = () => {
  dispatch(authActions.logout())

}
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {/* 1.1 conditional rendering based on authentication  */}
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>

            <li>
              {/* 1.4 logout handling */}
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
