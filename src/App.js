// import logo from './logo.svg';
// import './App.css';
import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Header from "./components/nav/Header";
import RegisterComplete from "./pages/auth/RegisterComplete";

import { auth } from "./firebase";
import { useDispatch } from "react-redux";

const App = () => {
const dispatch = useDispatch()

// To check firebase auth state
useEffect(() => {
  // clean up the state to prevent memory leaks
  const unsubscribe = auth.onAuthStateChanged(async (user) => {
    if(user) {
      const idTokenResult = await user.getIdTokenResult(); 
      //dispatch token to redux store (will validate in backend)
      console.log("user", user);
      dispatch({ 
        type: "LOGGED_IN_USER",
        payload: {
          email: user.email,
          token:idTokenResult.token,
        }
      })
    }
  });
  // clean up
  return () => unsubscribe(); 
}, [])


  return (
    <>
    <Header />
    <ToastContainer />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/register/complete" component={RegisterComplete} />
    </Switch>
    </>
  )
};
export default App;
