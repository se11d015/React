import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from "react-router-dom";


import indexRoute from "./routes/indexRoute"


import "./assets/css/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/pe-icon-7-stroke.css"





ReactDOM.render(
  <HashRouter>
    <Switch>
      {indexRoute.map((prop, key)=> {
        return <Route to={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </HashRouter>,
    document.getElementById('root'));
