import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Header from './Components/Header';
import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
console.log(isLoggedIn,'isLoggedIn')
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route
          path='/'
          exact
          element={
            isLoggedIn ? <Navigate to='/home' /> : <Navigate to='/login' />
          }
        />
            <Route path = '/login' element= {!isLoggedIn ? <Login />:< Navigate to = '/' /> } />
        <Route
          path='/home'
          element={isLoggedIn ? <Home /> : <Navigate to='/login' />}
        />
        <Route path='/login' element={<Login />} />
      </Routes>
      </Fragment>
  );
}

export default App;