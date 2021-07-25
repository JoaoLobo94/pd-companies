import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import UserDashboard from "./pages/UserAreaDashboard/UserDashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react';
import { useDispatch } from "react-redux";
import { login } from "./actions";
import { logout } from "./actions";

function App() {
  const dispatch = useDispatch();
  
  const isMetamaskWalletConnected = async () => {
    if (await window.ethereum._metamask.isUnlocked() === false) {
      dispatch(logout());
    }else{
      dispatch(login())
    }
  };
  React.useEffect(() => {
    window.addEventListener('DOMContentLoaded', () => {isMetamaskWalletConnected()})})

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/userArea" component={UserDashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;