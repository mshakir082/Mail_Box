import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';



const Header = () => {


  return (
    <div className={classes.container}>
      <div className={classes.eighty}>
        <h1>Mailbox</h1>
      </div>
      <div className={classes.remaining}>
        {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
        {isLoggedIn && <button onClick={authHandler}>Logout</button>}
      </div>

    </div>
  );
};

export default Header;
