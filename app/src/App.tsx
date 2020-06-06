import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import logo from './images/enCurtaLogo.png';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="background">
        <div className="card">
          <div className="logo">
            <h1><i>EnCurta</i></h1>
            <img src={logo} alt="logo" width="60" height="60" />
          </div>

          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/registrar"} component={Register} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
