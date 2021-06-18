import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute';
import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import "./styles.scss";
import axiosWithAuth from "./helpers/axiosWithAuth";


function App() {

  const history = useHistory();
  const [isAuth, setIsAuth] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
  }

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          {isAuth ? <a data-testid="logoutButton" href="#" onClick={handleLogout}>logout</a> : <div></div>}
        </header> 

        <Switch>
          <PrivateRoute exact path="/bubbles" component={BubblePage} />
          <Route path="/">
            <Login setIsAuth={setIsAuth} />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.