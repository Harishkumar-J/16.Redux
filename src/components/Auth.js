import classes from './Auth.module.css';
//1.1 using the store and states
import { authActions } from '../store/index';
import { useDispatch } from 'react-redux';
import { use } from 'react';

const Auth = () => {
  const dispatch = useDispatch()
  //1.2 dummy login function
  function loginHandler(event){
    event.preventDefault();
    
    dispatch(authActions.login())
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
